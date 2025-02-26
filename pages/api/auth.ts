import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const authString = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API error:", errorText);
      return res
        .status(response.status)
        .json({ error: "Failed to authenticate with Spotify" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Auth handler error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
