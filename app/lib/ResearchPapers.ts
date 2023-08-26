import { MongoClient, ObjectId } from "mongodb";

type Validate = { valid: boolean; error?: string };

export class ResearchPapers {
  private client: MongoClient;
  private collection: string = "papers"; // Changed to 'papers' to match your MongoDB collection name

  constructor(mongoClient: MongoClient) {
    this.client = mongoClient;
  }

  validateCreate(paper: any): Validate {
    if (!paper.title) {
      return {
        valid: false,
        error: "Missing Research Paper Title",
      };
    }
    if (!paper.authors || !Array.isArray(paper.authors)) {
      return {
        valid: false,
        error: "Missing Authors or Authors is not an array",
      };
    }
    // Add any more validation logic here
    return {
      valid: true,
    };
  }

  async getAllByStatus(status: string) {
    return this.client
      .db("researchPapers")
      .collection(this.collection)
      .find({ status })
      .sort({ published_at: -1 }) // changed from 'created_at' to 'published_at'
      .toArray();
  }

  async create(paper: any, auth: any) {
    const data = {
      ...paper,
      activity: [
        {
          timestamp: new Date(),
          message: `${auth?.user?.name} created this research paper`,
          type: "created",
          picture: auth?.user?.picture,
        },
      ],
      published_at: new Date(),
    };

    return await this.client
      .db("researchPapers")
      .collection(this.collection)
      .insertOne(data);
  }

  async get(paperId: string) {
    return await this.client
      .db("researchPapers")
      .collection(this.collection)
      .findOne({
        _id: new ObjectId(paperId),
      });
  }

  async getAll() {
    return await this.client
      .db("researchPapers")
      .collection(this.collection)
      .find({})
      .sort({ published_at: -1 })
      .toArray();
  }

  async update(paper: any, session: any) {
    const update = Object.entries(paper).reduce((acc, [key, value]) => {
      if (key === "activity") return acc;
      if (key === "_id") return acc;
      return {
        ...acc,
        [key]: value,
      };
    }, {});

    return await this.client
      .db("researchPapers")
      .collection(this.collection)
      .updateOne(
        { _id: new ObjectId(paper._id) },
        {
          $set: update,
          $push: {
            activity: {
              type: "update",
              picture: session?.user?.picture,
              message: `${session?.user?.name} updated attributes`,
              timestamp: new Date(),
            },
          },
        }
      );
  }

  async delete(paperId: string) {
    return await this.client
      .db("researchPapers")
      .collection(this.collection)
      .deleteOne({ _id: new ObjectId(paperId) });
  }
}
