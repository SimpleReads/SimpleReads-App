import { MongoClient } from "mongodb";
import { ResearchPapersDB } from "@/app/lib/researchPapersDB";
import Client from "@/app/lib/client";
import { createPaper } from "@/app/lib/createPaper";
import { NextResponse } from 'next/server';
import { ResearchPaper } from "@/app/types";

export async function POST(req: Request) {
    console.log("Handling POST request");
    const client = await Client();
    const researchPapersDB = new ResearchPapersDB(client);

    // data is being sent as a ResearchPaper in the request body
    const data = await req.json();
    const paper: ResearchPaper = data;

    // Store paper in database
    await researchPapersDB.insertPaper(paper);
    console.log("Paper stored successfully!");
    return NextResponse.json({message: "Paper stored successfully!"})
}
