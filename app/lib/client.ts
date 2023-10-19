import { MongoClient } from "mongodb";

// Define an asynchronous function 'Client' that returns a Promise of 'MongoClient'
const Client = async (): Promise<MongoClient> => {
  // Creates a new 'MongoClient' instance by passing the MongoDB connection URI from the environment variables
  const db = new MongoClient(process.env.DB_URI as string);

  // Connect to the MongoDB server
  await db.connect();

  // Return the connected instance
  return db;
};

export default Client;