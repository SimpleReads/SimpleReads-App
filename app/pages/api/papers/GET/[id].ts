import { NextApiRequest, NextApiResponse } from "next";
import Client from "@/lib/Client";
import { ApiRes } from "@/types/api";
import { ResearchPapers } from "@/lib/ResearchPapers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiRes<string>>
) {
  const client = await Client();
  const researchPapers = new ResearchPapers(client);

  const id = (req.query.id as string)?.trim();

  // Handle GET request for a single paper
  if (req.method === "GET" && id) {
    try {
      const paperData = await researchPapers.get(id); // Removed orgId argument
      await client.close();
      if (!paperData) {
        res.status(404).json({
          error: "PAPER_NOT_FOUND",
          status: 404,
          ok: false,
        });
        return;
      }
      return res.status(200).json({
        data: JSON.stringify(paperData),
        status: 200,
        ok: true,
      });
    } catch (error) {
      console.error("Could not fetch research paper", error);
      await client.close();
      res.status(500).json({
        error: "RETRIEVE_PAPER_ERROR",
        status: 500,
        ok: false,
      });
      return;
    }
  }

  // Fallback for unsupported operations
  await client.close();
  res.status(400).json({
    error: "UNSUPPORTED_OPERATION",
    status: 400,
    ok: false,
  });
  return;
}
