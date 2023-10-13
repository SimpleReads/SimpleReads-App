// pages/api/postFlask.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { path, ...bodyData } = req.body;

    try {
      const flaskResponse = await fetch(`http://54.212.16.183:5000/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if (!flaskResponse.ok) {
        const errorData = await flaskResponse.json();
        return res.status(flaskResponse.status).json(errorData);
      }

      const data = await flaskResponse.json();
      return res.status(200).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "An error occurred while connecting to the Flask server.",
        });
    }
  } else {
    res.status(405).json({ message: "Method not allowed. Use POST." });
  }
};
