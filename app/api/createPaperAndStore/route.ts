import { MongoClient } from "mongodb";
import { ResearchPapersDB } from "@/app/lib/researchPapersDB";
import Client from "@/app/lib/client";
import { createPaper } from "@/app/lib/createPaper";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    console.log("Handling POST request");
    const client = await Client();
    const researchPapersDB = new ResearchPapersDB(client);

    // Parse the JSON data from the request body
    const data = await req.json();
    const sections = data.sections;
    const sections_text = data.sections_text;
    const paperId = data.paperId;

    // Create paper
    const newPaper = createPaper(sections, sections_text, paperId);
    console.log("New paper created", newPaper);
    await researchPapersDB.insertPaper(newPaper);

    // Send the response
    return NextResponse.json(newPaper)
}
