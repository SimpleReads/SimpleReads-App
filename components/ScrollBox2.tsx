'use client'
import * as React from 'react'
import Link from 'next/link'
import getDefs from '@/app/lib/getDefs'
import { time } from 'console'

export default function ScrollBox({parentToChild, childToParent, uploadFile}) {


    const [defining, setDefining] = React.useState<number>(0) 

    let rawText = parentToChild
    let i = formatText(rawText)
    let sections = i[0]
    let text = i[1]

    childToParent(sections)

    const divstyle = {
        overflow: 'auto',
        height: 'min(90vh - 200px, 600px)',
    };

    const divstyle2 = {
        overflow: 'auto',
        position: 'relative' as 'relative',
        height: 'min(90vh - 200px, 300px)',
        width: "100%"
    };

    const btnstyle = {
        margin: '10px 5px 10px 5px',
        fontSize: '20px',
        fontWeight: '900'
    };
    const textstyle = {
        fontSize: '28px',
        scrollBehavior: 'smooth' as 'smooth',
        textAlign: 'left' as 'left',
        lineHeight: 2,
        letterSpacing: 1
    };

    const headingStyle = {
        fontSize: '50px',
        scrollBehavior: 'smooth' as 'smooth',
        textAlign: 'left' as 'left',
    };
    const btncontainer = {
        marginLeft: 'auto',
        marginRight: '0'
    };
    

    
  
  // Set a variable to track the position of the pop-out text box
  const [textBoxLayout, setTextBoxLayout] = React.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [def, setDef] = React.useState<string>();
  const [lastHeader, setLastHeader] = React.useState<string>();
  const [lastPos, setLastPos] = React.useState<number>(0);
  const [nextPos, setNextPos] = React.useState<number>();
  let timer = -1

  // DEFINE FUNCTIONS  
  const searchWord = async (word) => {
    if (defining > 0) {
        setDef(await getDefs(2, 2, word))
        setDefining(2)
    }
  }

  // Create a function to close the text box when an x button is clicked.
  const closeTextBox = () => {
      setDefining(0);
  }; 

  // Event handler for when the mouse button is pressed on the pop-out text box
  const handleMouseDown = (e) => {
      if (defining == 2) {
          return;
      }
      setDragging(true);
      setOffset({ x: e.clientX - textBoxLayout.x, y: e.clientY - textBoxLayout.y });
  };

  // Event handler for when the mouse button is released
  const handleMouseUp = () => {
      setDragging(false);
  };

  // Event handler for when the mouse is moved
  const handleMouseMove = (e) => {
      if (!dragging) {
          return;
      }
      setTextBoxLayout({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };


  const toggleDefine = () => {
    if (defining > 0) {
        setDefining(0)
    } else {
        setDefining(1)
    }
  }

  // SCROLL BOX FUNCTIONS
  const renderText = () => {
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

  const increaseFontSize = () => {
    // var box = Array.from(document.getElementsByClassName('scrollboxtext'))
    // for (const b of box) {
	//     var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'))
    var box = Array.from(document.getElementsByClassName('scrollboxtext') as HTMLCollectionOf<HTMLElement>);
    for (const b of box) {
        var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'));
	    if (fontsize < 79) {
	      b.style.fontSize = (fontsize + 2) + 'px'
	    }
    }
  }

    const decreaseFontSize = () => {
        Array.from(document.getElementsByClassName("scrollboxtext")).forEach(function(item) {
            const htmlElement = item as HTMLElement;
            var fontsize = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));
            if (fontsize > 17) {
                htmlElement.style.fontSize = (fontsize - 2) + 'px';
            }
        });
    }


  const scrollUp = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementsByClassName('scrollboxtext')[0]
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop -= addheight}, 100);
    }
    box.scrollTop -= excess
  }

  const scrollDown = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementsByClassName('scrollboxtext')[0]
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop += addheight}, 100);
    }
    box.scrollTop += excess
  }

  const scrollTo = (id) => {
    document.getElementById("scrollbox").scrollTo(0, 0)
    let y = document.getElementById(id).getBoundingClientRect().y
    let x = document.getElementById(id).getBoundingClientRect().x
    let y1 = document.getElementById("scrollbox").getBoundingClientRect().y
    let x1 = document.getElementById("scrollbox").getBoundingClientRect().x
    document.getElementById("scrollbox").scrollTo({top: y - y1, behavior: 'smooth'})
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
        <div className="row-auto">
          <div className='pt-32 pb-0 md:pt-40 md:pb-0'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="h3 mb-4" data-aos="fade-up">Sections</h3>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6 ml-2 mb-8">                    <div style={divstyle2} id="section-scrollbox">
                        {sections.map((label, index) => (
                            <div className="w-full px-3 mb-7">
                            <button id = {`${label}${index}button`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full" onClick = {() => scrollTo(`${label}${index}Header`)}>{label}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-0 ml-2">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="h3 mb-4" data-aos="fade-up">Tools</h3>
                    </div>
                    <div className="w-full px-3 mb-7">
                        <button id = {`Simplify`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full">Simplify</button>
                    </div>
                    <div className="w-full px-3 mb-7">
                        <button id = {`Define`}type = "button" className={defining > 0 ? ("btn text-gray-900 bg-purple-700 hover:bg-purple-800 w-full") : ("btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full")}
                            onClick = {toggleDefine}>{defining > 0 ? ("Click a Word to Define") : ("Define")}</button>
                    </div>
                    {/*Display the text box based on state. */}
                    {defining == 2 && (
                    <div className="popout-text-box" style={{
                        backgroundColor: 'lightblue', // Set the background color
                        padding: '10px', // Set padding
                        borderRadius: '5px', // Set border radius
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // Set box shadow
                        marginTop: '10px', // Set margin top
                        position: 'absolute', // Potisition is absolute
                        zIndex: 9999, // Ensure it's on top of other elements
                        left: `${textBoxLayout.x}px`, // Set left position
                        top: `${textBoxLayout.y}px`, // Set top position
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                        {/* Add a close button "x" */}
                        <button
                            type = "button"
                            onClick={closeTextBox}
                            style={{
                            position: 'absolute', // Position the button absolutely
                            top: '5px', // Position from the top edge
                            right: '5px', // Position from the right edge
                            background: 'none', // No background color
                            border: 'none', // No border
                            cursor: 'pointer', // Show a pointer cursor on hover
                            fontSize: '16px', // Set font size
                        }}> &times;
                        </button>

                        {def.split('\n').map(e => <p>{e}</p>)}
                    </div>
                    )}
                    <div className="w-full px-3 mb-7">
                        <button id = {`Upload`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full" onClick = {uploadFile}>Upload File</button>
                    </div>
                    <div className = "w-full px-3 mb-7 grid grid-cols-2 gap-4">
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" 
                            onClick = {increaseFontSize}>Font (+)</button>
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" 
                            onClick = {decreaseFontSize}>Font (-)</button>
                    </div>  
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className = "row-auto col-span-4">
          <div className="pt-32 pb-0 md:pt-32 md:pb-0">
            <div className="max-w-full mx-auto text-center pb-0 md:pb-0">
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Box */}
                    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                    <h4 className="h4 mb-2" id='Heading'>{lastHeader}</h4>
                    <div style={divstyle} id="scrollbox" onScroll={() => {timer = checkScroll(timer)}}>
                        {renderText()}
                    </div>
                    <div className = "w-full pt-4 px-3 mb-7  flex justify-center items-center space-x-4">
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0" 
                        onClick={scrollUp}>Scroll Up</button>
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0" 
                        onClick={scrollDown}>Scroll Down</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
          </div>
        </div>
      </>
    );
}

function formatText(rawText: string){
    let sections = ["Preface"]
    let text = []
    let paragraph = ""
    let splits = rawText.split('\n')
    for (let i = 0; i < splits.length; i++) {
        if ((splits[i].split(/( )/).length < 3) && (splits[i].charAt(0).match(/[A-Z]/)) && (/^[A-Za-z\s]*$/.test(splits[i])) && (splits[i].length > 5)) {
            text.push(paragraph)
            sections.push(splits[i])
            paragraph = ""
        }
        else {
            paragraph += `${splits[i]} `
        }
    }
    text.push(paragraph)
    return [sections, text]
}