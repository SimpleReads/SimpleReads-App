'use client'
import * as React from 'react'

export default function ScrollBox({parentToChild, childToParent}) {

    let rawText = parentToChild
    let i = formatText(rawText)
    let sections = i[0]
    let text = i[1]
    
    childToParent(sections)

    console.log(sections)
    console.log(text)

    const divstyle = {
        overflow: 'auto',
        height: 'min(90vh - 200px, 600px)'
    };
    const btnstyle = {
        margin: '10px 5px 10px 5px',
        fontSize: '32px',
        fontWeight: '900'
    };
    const textstyle = {
        fontSize: '28px',
        scrollBehavior: 'smooth',
        textAlign: 'left'
    };
    const headingStyle = {
        fontSize: '50px',
        scrollBehavior: 'smooth',
        textAlign: 'left'
    };
    const btncontainer = {
        marginLeft: 'auto',
        marginRight: '0'
    };
    
    // Dictionary state
    // Big text (to be replaced with server query)
    //this.text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
    // Initialise empty text
    // Styles
  // Functions
  const searchWord = (word) => {
    throw new Error('pressed ' + word)
  }

  const renderText = () => {
    return(
      <>
        {sections.map((section, index) => (
          <div>
            <h1 style={headingStyle} className="scrollboxtext" id={section}>
              <span onClick={() => {searchWord(section)}}>{section}</span>
            </h1>
            <p style={textstyle} className="scrollboxtext" id={section}>
              {text[index].split(/( )/).map(word => <span onClick={() => {searchWord(word)}}>{word}</span>)}
            </p>
            <br></br>
          </div>
        ))}
      </>
    )
  }

  const increaseFontSize = () => {
    var box = document.getElementsByClassName('scrollboxtext')
    for (const b of box) {
	    var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'))
	    if (fontsize < 79) {
	      b.style.fontSize = (fontsize + 2) + 'px'
	    }
    }
  }

  const decreaseFontSize = () => {

    Array.from(document.getElementsByClassName("scrollboxtext")).forEach(function(item) {
        var fontsize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'))
	    if (fontsize > 17) {
	    	item.style.fontSize = (fontsize - 2) + 'px'
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

  const scrollTo = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementById('')
  }
  
  const componentDidMount = () => {
    // Listeners
    document.addEventListener('keydown', (e) => {
      const keyName = e.key
      if (keyName == "Enter") {
        var box = document.getElementById('scrollbox')
        var textelement = document.getElementsByClassName('scrollboxtext')[0]
        var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
        box.scrollTop += lineheight
      }
    })
    for (const section of sections) {
      document.getElementById(section).addEventListener('mouseover', (e) => {
        var heading = document.getElementById('Heading')
        heading.innerHTML = section
      })
    }
  }

    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Box */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2" id='Heading'>Abstract</h4>
              <div style={divstyle} id="scrollbox">
                {renderText()}
              </div>
              <div style={btncontainer}>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={btnstyle} onClick={scrollUp}>scroll up</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={btnstyle} onClick={scrollDown}>scroll down</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={btnstyle} onClick={increaseFontSize}>+</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={btnstyle} onClick={decreaseFontSize}>-</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

function formatText(rawText: string){
    let sections = ["Footnotes"]
    let text = []
    let paragraph = ""
    let splits = rawText.split('\n')
    for (let i = 0; i < splits.length; i++) {
        if ((splits[i].split(/( )/).length < 2) && (splits[i].charAt(0).match(/[A-Z]/))) {
            text.push(paragraph)
            sections.push(splits[i])
            paragraph = ""
            paragraph += `${splits[i]}\n`
        }
        else {
            paragraph += ` ${splits[i]}`
        }
    }
    text.push(paragraph)
    console.log([sections, text])
    return [sections, text]
}