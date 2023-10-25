"use client";

import { useState } from "react";
import FileDrop from "./fileDrop";
import ReadPage from "./ScrollBox2";
import { createResearchPaperAndStore } from "@/app/utils/paperAPI";

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
      const paperId = "000000000000000000000000";
      const paper = await createResearchPaperAndStore(sections, text, paperId);
      console.log("Paper created:", paper);
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
          newText={uploadText}
          currentText={text}
          headers={headers}
        />
      )}
    </>
  );
}
