'use client'
import * as React from 'react'
import getDefs from '@/app/lib/getDefs'
import simplifyPDF from '@/app/lib/simplifyPdf'
import SideBar from './SideBar'
import ScrollBox from './ScrollBox'
import ReadArea from './ReadArea'

export default function ReadPage({uploadFile2, newtext, currentText, headers}) {

    const [defining, setDefining] = React.useState<number>(0)
    const [def, setDef] = React.useState<string>();
    const [lastHeader, setLastHeader] = React.useState<string>();
    let text = currentText
    let sections = headers
    let timer = -1
    // DEFINE FUNCTIONS  
    const searchWord = async (word) => {
        if (defining > 0) {
            console.log(word)
            setDef(await getDefs(2, 2, word))
            setDefining(2)
        }
    }

    const toggleDefine = (val) => {
        setDef(null)
        setDefining(val)
    }

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

    const scroll = (up) => {
        var box = document.getElementById('scrollbox')
        var textelement = document.getElementsByClassName('scrollboxtext')[0]
        var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
        var addheight = Math.floor(lineheight/10)
        var excess = lineheight % 10
        for (var i=0; i<10; i++) {
        setTimeout(() => {up ? box.scrollTop -= addheight : box.scrollTop += addheight}, 100);
        }
        box.scrollTop -= excess
    }

    const scrollTo = (id) => {
        document.getElementById("scrollbox").scrollTo(0, 0)
        let y = document.getElementById(id).getBoundingClientRect().y
        let y1 = document.getElementById("scrollbox").getBoundingClientRect().y
        document.getElementById("scrollbox").scrollTo({top: y - y1, behavior: 'smooth'})
    }

    const simplify = async(oldtext) => {
        newtext(await simplifyPDF(oldtext))
    }

    const checkScroll = (timer) => {
        if (timer != -1){
            clearTimeout(timer)
        }
        return window.setTimeout(getLastHeader, 100)
    }

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
    //COMPONENT
    return (
        <>
        <SideBar sections={sections} triggerSimplify={() => simplify(text)} toggleDefine={toggleDefine} 
            changeFont={changeFontSize} uploadFile={uploadFile2} scrollTo={scrollTo} def={def}
        />
        <ReadArea headings={sections} text={text} scroll={checkScroll} timer={timer} searchWord={searchWord} 
        lastHeader={lastHeader}/>
      </>
    );
}