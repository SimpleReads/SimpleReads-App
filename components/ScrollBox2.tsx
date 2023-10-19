'use client'
import * as React from 'react'
import getDefs from '@/app/lib/getDefs'
import simplifyPDF from '@/app/lib/simplifyPdf'
import simplifyGPT4 from '@/app/lib/simplifyGPT4'
import SideBar from './SideBar'
import ReadArea from './ReadArea'

/**
 * Readpage componet. 
 * @param {function} uploadFile2 - Function for uploading a file.
 * @param {function} newtext - Function to update the text content.
 * @param {string} currentText - The current text content.
 * @param {array} headers - An array of section headers.
 * @return a component that houses a sidebar component and read arena component
 */
export default function ReadPage({uploadFile2, newtext, currentText, headers}) {
    // State variables to handle the components behaviour 
    const [defining, setDefining] = React.useState<number>(0)
    const [def, setDef] = React.useState<string>();
    const [lastHeader, setLastHeader] = React.useState<string>();

    let text = currentText
    let sections = headers
    let timer = -1

    // Function whichs define a given word by fetching its definitions.
    const searchWord = async (word) => {
        if (defining > 0) {
            console.log(word)
            setDef(await getDefs(2, 2, word))
            setDefining(2)
        }
    }

    // Function whichs toggles the button display to show the given text.
    const toggleDefine = (val) => {
        setDef(null)
        setDefining(val)
    }

    // Function which changes the font size of the text displayed in the read area by the given value.
    const changeFontSize = (change: number) => {
        console.log(change)
        var box = Array.from(document.getElementsByClassName('scrollboxtext') as HTMLCollectionOf<HTMLElement>);
        for (const b of box) {
            var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'));
            if (fontsize < 79) {
            b.style.fontSize = (fontsize + change) + 'px'
            }
        }
    }

    // Function which scrolls to a specific section in the scrollbox.
    const scrollTo = (id) => {
        const scrollbox = document.getElementById("scrollbox");

        // Get current scroll position
        const currentScrollTop = scrollbox.scrollTop;

        // Calculate target element's Y position
        const y = document.getElementById(id).getBoundingClientRect().y;

        // Calculate scrollbox's Y position
        const y1 = scrollbox.getBoundingClientRect().y;

        // Adjust for the current scroll position and perform the smooth scroll
        scrollbox.scrollTo({
            top: currentScrollTop + y - y1,
            behavior: 'smooth'
        });
    }

    // Function which simplifies the given text to a reduced form.
    const simplify = async(oldtext) => {
        newtext(await simplifyPDF(oldtext))
    }

    // Fuction which simplifies the given text using GPT-4.
    const gpt4 = async(oldtext) => {
        console.log("GPT4")
        newtext(await simplifyGPT4(oldtext))
    }

    // Function which checks the scroll position and gets the last section header in view.
    const checkScroll = (timer) => {
        if (timer != -1){
            clearTimeout(timer)
        }
        return window.setTimeout(getLastHeader, 100)
    }

    // Function which gets the last section header in view and sets it as the last header.
    const getLastHeader = () => {
        let y1 = document.getElementById("scrollbox").getBoundingClientRect().y
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            let pos = document.getElementById(`${section}${i}Header`).getBoundingClientRect().top
            if (pos - y1 > 0) {
                setLastHeader(sections[i-1])
                return false
            }
        }
        setLastHeader(sections[sections.length - 1])
    }

    return (
        <> {/* Sidebar component call */}
        <SideBar sections={sections} triggerSimplify={() => simplify(text)} triggerGPT4={() => gpt4(text)} toggleDefine={toggleDefine} 
            changeFont={changeFontSize} uploadFile={uploadFile2} scrollTo={scrollTo} def={def}
        /> {/* Read Area component call */}
        <ReadArea headings={sections} text={text} scroll={checkScroll} timer={timer} searchWord={searchWord} 
        lastHeader={lastHeader}/>
      </>
    );
}