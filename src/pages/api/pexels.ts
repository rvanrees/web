import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.NEXT_PUBLIC_PEXELS;
  const { collectionId } = req.query;

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/collections/${collectionId}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API-fout:", error);
    res
      .status(500)
      .json({ error: "Er is iets misgegaan bij het ophalen van de data." });
  }
}
