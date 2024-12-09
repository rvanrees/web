import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { since, until } = req.query;
  const owner = "rvanrees";
  const repo = "web";
  const GITHUB_PAT = process.env.NEXT_PUBLIC_GITHUB_PAT || "";

  const GITHUB_API_URL = `https://api.github.com/repos/${owner}/${repo}/commits`;
  const headers = {
    Authorization: `Bearer ${GITHUB_PAT}`,
    Accept: "application/vnd.github.v3+json",
  };

  try {
    if (!since || !until) {
      return res
        .status(400)
        .json({ error: "Both 'since' and 'until' parameters are required" });
    }

    const response = await fetch(
      `${GITHUB_API_URL}?since=${since}&until=${until}`,
      { headers }
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Error fetching commits" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching commits:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
