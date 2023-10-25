import { MongoClient } from "mongodb";

// Function to create a new paper object
export const createResearchPaperAndStore = async (sections, sections_text, paperId) => {
  try {
    const response = await fetch("/api/createPaperAndStore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sections, sections_text, paperId }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error creating paper:", error.message);
  }
};
  

export const getResearchPaper = async (paperId) => {
  try {
    console.log("getResearchPaper");
    const response = await fetch(
      `/api/getPaper?paperId=${paperId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Paper fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching paper:", error.message);
  }
};
