"use client";
import * as React from "react";
import getDefs from "@/app/lib/getDefs";
import simplifyPDF from "@/app/lib/simplifyPdf";
import simplifyGPT4 from "@/app/lib/simplifyGPT4";
import simplifyDotPoints from "@/app/lib/simplifyDotPoints";
import SideBar from "./SideBar";
import ReadArea from "./ReadArea";
import { getResearchPaper, createResearchPaperAndStore } from "@/app/utils/paperAPI";

/**
 * Readpage componet.
 * @param {function} uploadFile2 - Function for uploading a file.
 * @param {function} newText - Function to update the text content.
 * @param {string} currentText - The current text content.
 * @param {array} headers - An array of section headers.
 * @return a component that houses a sidebar component and read arena component
 */
export default function ReadPage({
  uploadFile2,
  newText,
  currentText,
  headers,
}) {
  // State variables to handle the components behaviour
  const [defining, setDefining] = React.useState<number>(0);
  const [def, setDef] = React.useState<string>();
  const [lastHeader, setLastHeader] = React.useState<string>();
  let text = currentText;
  let sections = headers;
  let timer = -1;

  const searchWord = async (word) => {
    if (defining > 0) {
      console.log(word);
      setDef(await getDefs(2, 2, word));
      setDefining(2);
    }
  };

  // Function whichs toggles the button display to show the given text.
  const toggleDefine = (val) => {
    setDef(null);
    setDefining(val);
  };

  const changeFontSize = (change: number) => {
    console.log(change);
    var box = Array.from(
      document.getElementsByClassName(
        "scrollboxtext"
      ) as HTMLCollectionOf<HTMLElement>
    );
    for (const b of box) {
      var fontsize = parseFloat(
        window.getComputedStyle(b, null).getPropertyValue("font-size")
      );
      fontsize < 79 ? (b.style.fontSize = fontsize + change + "px") : null;
    }
  };

  const scrollTo = (id) => {
    const scrollbox = document.getElementById("scrollbox");
    const currentScrollTop = scrollbox.scrollTop;
    const targetY = document.getElementById(id).getBoundingClientRect().y;
    const currentY = scrollbox.getBoundingClientRect().y;
    scrollbox.scrollTo({
      top: currentScrollTop + targetY - currentY,
      behavior: "smooth",
    });
  };

  const handleSimplification = async (oldtext, simplifyFunction, paperId) => {
    try {
      const existingPaper = await getResearchPaper(paperId);
  
      if (existingPaper && existingPaper.message !== "Paper not found") {
        console.log("Paper already exists in the database", existingPaper);
        newText(existingPaper.sections.map(section => section.text));
      } else {
        const updatedText = await simplifyFunction(oldtext);
        const sections = headers.map((header, index) => ({ name: header, text: updatedText[index] }));
  
        createResearchPaperAndStore(sections, updatedText, paperId)
          .then(response => {
            console.log("Paper stored successfully", response);
            newText(updatedText);
          })
          .catch(error => {
            console.error("Error storing paper", error);
          });
      }
    } catch (error) {
      console.error("Error fetching or storing paper", error);
    }
  };

  const simplify = async (oldtext) => {
    console.log("Simplify");
    const paperId = "000000000000000000000002";
    handleSimplification(oldtext, simplifyPDF, paperId);
  };
  
  const gpt4 = async (oldtext) => {
    console.log("GPT4");
    const paperId = "000000000000000000000003";
    handleSimplification(oldtext, simplifyGPT4, paperId);
  };
  
  const dotpoints = async (oldtext) => {
    console.log("Dotpoints");
    const paperId = "000000000000000000000001";
    handleSimplification(oldtext, simplifyDotPoints, paperId);
  };
  

  const reset = async () => {
    const _id = "000000000000000000000000";
    const paper2 = await getResearchPaper(_id);
    const newSections = paper2.sections;
    const newHeaders: string[] = [];
    const newTexts: string[] = [];
    for (const section of newSections) {
      newHeaders.push(section.name);
      newTexts.push(section.text);
    }
    newText(newTexts);
  };

  // Function which checks the scroll position and gets the last section header in view.
  const checkScroll = (timer) => {
    if (timer != -1) {
      clearTimeout(timer);
    }
    return window.setTimeout(getLastHeader, 100);
  };

  // Function which gets the last section header in view and sets it as the last header.
  const getLastHeader = () => {
    let y1 = document.getElementById("scrollbox").getBoundingClientRect().y;
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let pos = document
        .getElementById(`${section}${i}Header`)
        .getBoundingClientRect().top;
      if (pos - y1 > 0) {
        setLastHeader(sections[i - 1]);
        return false;
      }
    }
    setLastHeader(sections[sections.length - 1]);
  };

  return (
    <>
      {" "}
      {/* Sidebar component call */}
      <SideBar
        sections={sections}
        triggerSimplify={() => simplify(text)}
        triggerGPT4={() => gpt4(text)}
        triggerDotPoints={() => dotpoints(text)}
        triggerReset={() => reset()}
        toggleDefine={toggleDefine}
        changeFont={changeFontSize}
        uploadFile={uploadFile2}
        scrollTo={scrollTo}
        def={def}
      />{" "}
      {/* Read Area component call */}
      <ReadArea
        headings={sections}
        text={text}
        scroll={checkScroll}
        timer={timer}
        searchWord={searchWord}
        lastHeader={lastHeader}
      />
    </>
  );
}
