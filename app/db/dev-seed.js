const mongodb = require('mongodb');
const env = require('dotenv');

const main = async () => {
    env.config();

    // Connect to MongoDB
    const client = new mongodb.MongoClient(process.env.DB_URI);
    await client.connect();

    // Get a reference to the database and the collection
    const db = client.db('researchPapers');
    const papersCollection = db.collection('papers');

    // Create a paper object with sections
    const paperData = {
        title: "Sample Research Paper",
        authors: ["Alice", "Bob"],
        abstract: "This is an example abstract...",
        sections: [
            {
                name: "Introduction",
                text: "This is the introduction..."
            },
            {
                name: "Methodology",
                text: "This describes the methodology..."
            },
            {
                name: "Results",
                text: "These are the results..."
            },
            {
                name: "Conclusion",
                text: "This is the conclusion..."
            }
        ],
        keywords: ["example", "sample"],
        published_at: new Date("2021-01-01T00:00:00Z")
    };

    // Insert the paper object into the collection
    await papersCollection.insertOne(paperData);

    console.log("Paper with sections inserted successfully!");

    // Close the connection
    await client.close();
};

// Run the function
main().catch((error) => console.error(error));
