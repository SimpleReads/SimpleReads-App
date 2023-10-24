// paperCreator.ts
import { Section, ResearchPaper } from "@/app/types";
import { ObjectId } from "mongodb";

export const createPaper = (headers, text, paperId): ResearchPaper => {
  console.log("Inside @/app/lib/createPaper.ts ", paperId);
  if (!headers || !text) {
    throw new Error("Invalid arguments passed to createPaper");
  }
  
  if (headers.length !== text.length) {
    throw new Error(
      "The number of headers must match the number of text sections."
    );
  }

  const sections: Section[] = headers.map((header, index) => ({
    name: header,
    text: text[index],
  }));

  const paper = {
    _id: new ObjectId(paperId),
    sections,
  };
  return paper;
};