import { NextResponse } from 'next/server';
import { ResearchPapersDB } from "@/app/lib/researchPapersDB";
import Client from "@/app/lib/client";
import { ResearchPaper } from "@/app/types";

export async function GET(req: Request) {
  console.log("Handling GET request");
  const client = await Client();
  const researchPapersDB = new ResearchPapersDB(client);

  // Extract paperId from URL query parameters
  const url = new URL(req.url);
  const paperId = url.searchParams.get('paperId');

  if (!paperId) {
    return new Response('paperId is required', { status: 400 });
  }

  try {
    const paper: ResearchPaper = await researchPapersDB.getPaperById(paperId);
    
    if (!paper) {
      // If paper is not found, return a specific value or error message
      return NextResponse.json({ message: "Paper not found" });
    }

    // Send the response
    return NextResponse.json(paper);
  } catch (error) {
    console.error("Error fetching paper:", error);
    return new Response('Internal server error', { status: 500 });
  }
}
