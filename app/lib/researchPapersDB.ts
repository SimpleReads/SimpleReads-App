import { MongoClient, ObjectId } from "mongodb";
import { Section, ResearchPaper } from "@/app/types";

export class ResearchPapersDB {
  private db: string = "researchPapers";
  private collection: string = "papers";
  private client: MongoClient;

  constructor(client: MongoClient) {
    this.client = client;
  }

  async insertPapers(papers: ResearchPaper[]) {
    await this.client
      .db(this.db)
      .collection(this.collection)
      .insertMany(papers);
    console.log("Papers inserted successfully!");
  }

  async insertPaper(paper: ResearchPaper) {
    await this.client.db(this.db).collection(this.collection).insertOne(paper);
    console.log("Paper inserted successfully!");
  }

  async updatePaperSections(paperId: string | ObjectId, sections: Section[]) {
    const sortedSections = sections.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    await this.client
      .db(this.db)
      .collection(this.collection)
      .updateOne(
        { _id: new ObjectId(paperId) },
        { $set: { sections: sortedSections } }
      );
    console.log("Paper sections updated successfully!");
  }

  async getPaperById(paperId: string | ObjectId): Promise<ResearchPaper> {
    console.log("id: ", paperId)
    // log every paper in the database
    const papers = await this.client
      .db(this.db)
      .collection(this.collection)
      .find({})
      .toArray();
    console.log("papers: ", papers);
    const paper = await this.client
      .db(this.db)
      .collection(this.collection)
      .findOne({ _id: new ObjectId(paperId) });

    if (!paper) {
      throw new Error("Paper not found");
    }

    return paper as ResearchPaper;
  }
}
