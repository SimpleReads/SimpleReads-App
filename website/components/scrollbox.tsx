'use client'

import * as React from 'react'
import ReactDOM from 'react-dom'


export default class scrollbox extends React.Component<{}, {active: string}> {

  constructor(props:any){
    super(props)

    // Dictionary state

    this.sections = ["Abstract", "Introduction", "Methods", "Results", "Discussion"]

    // Big text (to be replaced with server query)

    //this.text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."

    // Initialise empty text

    this.text = {}

    for (const section of this.sections) {
      this.text[section] = null
    }


    // Fill out with hard coded

    var abstract = "n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat"
    
    var introduction = "fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint"
   
    var methods = "nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat"
    
    var results = "velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu"
    
    var discussion = "Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in"

    this.text['Abstract'] = abstract
    this.text['Introduction'] = introduction
    this.text['Methods'] = methods
    this.text['Results'] = results
    this.text['Discussion'] = discussion

    // Styles

    this.divstyle = {
      overflow: 'auto',
      height: 'min(90vh - 200px, 600px)'
    }

    this.btnstyle = {
      margin: '10px 5px 10px 5px',
      fontSize: '32px',
      fontWeight: '900'
    }

    this.textstyle = {
      fontSize: '28px',
      scrollBehavior: 'smooth'
    }

    this.btncontainer = {
      marginLeft: 'auto',
      marginRight: '0'
    }

  }

  // Functions

  searchWord = (word) => {
    throw new Error('pressed ' + word)
  }
/*
  renderText = () => {return(
  <p className="text-lg text-gray-400 text-center" style={this.textstyle} id="scrollboxtext">
    {this.text.split(/( )/).map(word => <span onClick={() => {this.searchWord(word)}}>{word}</span>)}
  </p>
    )
  }
  */
  //className="text-lg text-gray-400 text-center" 
  renderText = () => {
    return(
      <>
        {this.sections.map((section, index) => (
          <div>
            {<p style={this.textstyle} className="scrollboxtext" id={section}>
              {this.text[section].split(/( )/).map(word => <span onClick={() => {this.searchWord(word)}}>{word}</span>)}
            </p>}
          </div>
        ))}
      </>
    )
  }

  increaseFontSize = () => {
    var box = document.getElementById('scrollboxtext')
    var fontsize = parseFloat(window.getComputedStyle(box, null).getPropertyValue('font-size'))
    if (fontsize < 79) {
      box.style.fontSize = (fontsize + 2) + 'px'
    }
  }

  decreaseFontSize = () => {
    var box = document.getElementById('scrollboxtext')
    var fontsize = parseFloat(window.getComputedStyle(box, null).getPropertyValue('font-size'))
    if (fontsize > 17) {
      box.style.fontSize = (parseFloat(fontsize) - 2) + 'px'
    }
  }

  scrollUp = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementById('scrollboxtext')
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop -= addheight}, 100);
    }
    box.scrollTop -= excess
  }

  scrollDown = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementById('scrollboxtext')
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop += addheight}, 100);
    }
    box.scrollTop += excess
  }

  scrollTo = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementById('')
  }

  componentDidMount(): React.ReactNode {
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

    for (const section of this.sections) {
      document.getElementById(section).addEventListener('mouseover', (e) => {
        var heading = document.getElementById('Heading')
        heading.innerHTML = section
      })
    }
  }

  render(): React.ReactNode {

    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Box */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2" id='Heading'>Abstract</h4>
              <div style={this.divstyle} id="scrollbox">
                {this.renderText()}
              </div>
              <div style={this.btncontainer}>
                <btn className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={this.btnstyle} onClick={this.scrollUp}>scroll up</btn>
                <btn className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={this.btnstyle} onClick={this.scrollDown}>scroll down</btn>
                <btn className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={this.btnstyle} onClick={this.increaseFontSize}>+</btn>
                <btn className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={this.btnstyle} onClick={this.decreaseFontSize}>-</btn>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
