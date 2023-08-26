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

    // Create two paper objects with sections
    const papersData = [
        {
            title: "Sample Research Paper 1",
            authors: ["Alice", "Bob"],
            abstract: "This is an example abstract for paper 1...",
            sections: [
                {
                    name: "Introduction",
                    text: "This is the introduction for paper 1..."
                },
                {
                    name: "Methodology",
                    text: "This describes the methodology for paper 1..."
                },
                {
                    name: "Results",
                    text: "These are the results for paper 1..."
                },
                {
                    name: "Conclusion",
                    text: "This is the conclusion for paper 1..."
                }
            ],
            keywords: ["example", "sample"],
            published_at: new Date("2021-01-01T00:00:00Z")
        },
        {
            title: "Sample Research Paper 2",
            authors: ["Alice", "Bob"],
            abstract: "This is an example abstract for paper 2...",
            sections: [
                {
                    name: "Introduction",
                    text: "This is the introduction for paper 2..."
                },
                {
                    name: "Methodology",
                    text: "This describes the methodology for paper 2..."
                },
                {
                    name: "Results",
                    text: "These are the results for paper 2..."
                },
                {
                    name: "Conclusion",
                    text: "This is the conclusion for paper 2..."
                }
            ],
            keywords: ["example", "sample"],
            published_at: new Date("2021-01-02T00:00:00Z")
        }
    ];

    // Insert the paper objects into the collection
    await papersCollection.insertMany(papersData);

    console.log("Papers with sections inserted successfully!");

    // Close the connection
    await client.close();
};

// Run the function
main().catch((error) => console.error(error));
