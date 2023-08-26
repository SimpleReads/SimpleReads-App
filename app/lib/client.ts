import { MongoClient } from "mongodb";

const Client = async (): Promise<MongoClient> => {
  const db = new MongoClient(process.env.DB_URI as string);
  await db.connect();
  return db;
};

export default Client;
