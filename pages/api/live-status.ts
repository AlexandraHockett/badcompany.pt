import { NextApiRequest, NextApiResponse } from "next";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 900 }); // Cache for 15 minutes

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get current date and time in UTC (or adjust to your timezone)
  const now = new Date();
  const dayOfWeek = now.getUTCDay();
  const hours = now.getUTCHours(); // UTC

  // Adjust for UTC+1 during DST (roughly March to October)
  const isDST = now.getMonth() >= 2 && now.getMonth() <= 9; // Approximation
  const localHours = isDST ? hours + 1 : hours;

  const isFridayNight = dayOfWeek === 5 && localHours >= 18;
  const isSaturdayMorning = dayOfWeek === 6 && localHours < 6;
  const isSaturdayNight = dayOfWeek === 6 && localHours >= 18;
  const isSundayMorning = dayOfWeek === 0 && localHours < 6;

  const isActiveTime =
    isFridayNight || isSaturdayMorning || isSaturdayNight || isSundayMorning;

  // If not Friday or Saturday night, return "not live" without hitting the API
  if (!isActiveTime) {
    return res.status(200).json({ isLive: false });
  }

  // Check cache first during active times
  const cachedStatus = cache.get("liveStatus");
  if (cachedStatus !== undefined) {
    return res.status(200).json({ isLive: cachedStatus });
  }

  try {
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

    // Store in cache
    cache.set("liveStatus", liveStatus);

    return res.status(200).json({ isLive: liveStatus });
  } catch (error) {
    console.error("Erro ao verificar live:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erro desconhecido.",
    });
  }
}
