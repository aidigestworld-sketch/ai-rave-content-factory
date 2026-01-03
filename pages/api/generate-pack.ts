import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return res.status(200).json({ ok: true, method: "POST works" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ ok: true, method: "GET works" });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
