import {headingStyle, divstyle, textstyle} from "./style"

export default function ScrollBox({headings, text, scroll, timer, searchWord}) {

    
    // SCROLL BOX FUNCTIONS
    const renderText = (sections, text) => {
        return(
        <>
            {sections.map((section, index) => (
            <div>
                <h1 style={headingStyle} className="scrollboxtext" id={`${section}${index}Header`}>
                <span onClick={() => {searchWord(section)}}>{`${section}`}</span>
                </h1>
                <p style={textstyle} className="scrollboxtext" id={`${section}${index}`}>
                {text[index].split(/( )/).map(word => <span onClick={() => {searchWord(word)}}>{word}</span>)}
                </p>
                <br></br>
            </div>
            ))}
        </>
        )
    }


    return (
        <div style={divstyle} id="scrollbox" onScroll={() => scroll(timer)}>
            {renderText(headings, text)}
        </div>
    )
}