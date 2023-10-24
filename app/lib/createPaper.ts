// paperCreator.ts
import { Section, ResearchPaper } from "@/app/types";
import { ObjectId } from "mongodb";

export const createPaper = (headers, text): ResearchPaper => {
  console.log("Inside @/app/lib/createPaper.ts ");
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

  const paper: ResearchPaper = {
    _id: new ObjectId("000000000000000000000000"),
    sections,
  };
  return paper;
};