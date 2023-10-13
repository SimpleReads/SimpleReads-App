// pages/api/getFlask.js

export default async (req, res) => {
  const path = req.query.path;

  try {
    const message = await getInfo(path);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

async function getInfo(path) {
  const response = await fetch(`http://54.212.16.183:5000/${path}`);

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error("Error fetching from flask:", errorDetails);
    throw new Error("Failed to fetch from Flask");
  }

  const result = await response.json();
  return result.message;
}
