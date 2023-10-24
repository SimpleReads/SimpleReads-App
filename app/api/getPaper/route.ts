import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { ResearchPapersDB } from "@/app/lib/researchPapersDB";
import Client from "@/app/lib/client";
import { ResearchPaper } from "@/app/types";

export async function GET(req) {
  console.log("Handling GET request");
  const client = await Client();
  const researchPapersDB = new ResearchPapersDB(client);

  // Extract paperId from URL query parameters
  const url = new URL(req.url);
  const paperId = url.searchParams.get('paperId');

  if (!paperId) {
    return new Response('paperId is required', { status: 400 });
  }

  const paper: ResearchPaper = await researchPapersDB.getPaperById(paperId);

  // Send the response
  return NextResponse.json(paper);
}
