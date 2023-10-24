"use client";

import { useState } from "react";
import FileDrop from "./fileDrop";
import ReadPage from "./ScrollBox2";
import { Section, ResearchPaper } from "@/app/types";

/**
 * The parent of fileDrop.tsx and the child to ScrollBox, this component manages the state of uploaded files and displays the
 * 'FileDrop' component for file upload or 'ScrollBox' component for displaying text and headers.
 * @return a component that either displays 'FileDrop' or 'ScrollBox' componenent pending 'uploadcheck'
 */
export default function ReadHub() {
  // State variables to handle the components behaviour
  const [uploadCheck, setUploadCheck] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  // Function to create a new paper object
  const createResearchPaper = async (sections, sections_text) => {
    try {
      const response = await fetch("/api/createPaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sections, sections_text }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.json();
    } catch (error) {
      console.error("Error creating paper:", error.message);
    }
  };

  // Function to create a new paper object
  const storeResearchPaper = async (paper) => {
    try {
      const response = await fetch("/api/storePaper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paper }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.json();
    } catch (error) {
      console.error("Error creating paper:", error.message);
    }
  };

  // Function to fetch a paper object by its ID
  const getResearchPaper = async (paperId) => {
    try {
      console.log("getResearchPaper");
      const response = await fetch(`/api/getPaper?paperId=${paperId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  // Function to handle a file upload and format text
  const upload = (info) => {
    console.log("upload");
    setUploadCheck(1);
    formatText(info);
    // const client = await Client();
    // const researchPapersDB = new ResearchPapersDB(client);
  };

  // Function to handle to set text
  const uploadText = (text) => {
    setText(text);
  };

  // Function to format text into a required format
  const formatText = async (rawText: string) => {
    // Remove form feed characters
    rawText = rawText.replace(/\f/g, "");

    let sections = ["Preface"];
    let text = [];
    let paragraph = "";
    let splits = rawText.split("\n");
    for (let i = 0; i < splits.length; i++) {
      if (
        splits[i].split(/( )/).length < 5 &&
        splits[i].charAt(0).match(/[0-9]/) &&
        /^[.0-9A-Za-z\s]*$/.test(splits[i]) &&
        splits[i].length > 5
      ) {
        text.push(paragraph);
        sections.push(splits[i]);
        paragraph = "";
      } else {
        paragraph += `${splits[i]} `;
      }
    }
    text.push(paragraph);
    setHeaders(sections);
    setText(text);
    // use createPaper to create a new paper object
    try {
      const paper = await createResearchPaper(sections, text);
      await storeResearchPaper(paper);
      const _id = "000000000000000000000000";
      const paper2 = await getResearchPaper(_id);
      console.log("paper2", paper2);
    } catch (error) {
      console.error("Error creating paper:", error);
    }
    // console.log("Headers", sections);
    // console.log("Text", text);
  };

  // Function to reset the upload check state
  const uploadFile = () => {
    console.log("A");
    setUploadCheck(0);
  };

  return (
    <>
      {uploadCheck <= 0 ? (
        // Display the FileDrop Component for File Upload
        <FileDrop childToParent={upload} />
      ) : (
        // Display the ScrollBox component with text and header handling
        <ReadPage
          uploadFile2={uploadFile}
          newtext={uploadText}
          currentText={text}
          headers={headers}
        />
      )}
    </>
  );
}
