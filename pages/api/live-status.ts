import { NextApiRequest, NextApiResponse } from "next";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 900 }); // Cache por 15 minutos

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verificar se já temos em cache
  const cachedStatus = cache.get("liveStatus");
  if (cachedStatus !== undefined) {
    return res.status(200).json({ isLive: cachedStatus });
  }

  try {
    // Usa a versão pública para o canal (acessível no cliente) e a versão privada para a API key
    const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;

    if (!CHANNEL_ID || !API_KEY) {
      throw new Error("YouTube channel ID ou API key está ausente.");
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro ao obter status do live: ${response.statusText}. Detalhes: ${JSON.stringify(errorData)}`
      );
    }

    const data = await response.json();
    const liveStatus =
      data.items?.length > 0 &&
      data.items[0].snippet.liveBroadcastContent === "live";

    // Guardar no cache do servidor
    cache.set("liveStatus", liveStatus);

    return res.status(200).json({ isLive: liveStatus });
  } catch (error) {
    console.error("Erro ao verificar live:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erro desconhecido.",
    });
  }
}
