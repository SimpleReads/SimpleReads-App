'use client'

import * as React from "react"
//import { useEffect, useState } from 'react'
//import getDefs from "../lib/getDefs"
//import getInfo from "../lib/flaskGrab"
//import dynamic from 'next/dynamic'
//let NUM_OF_DEFS = 2
//let NUM_OF_USAGES = 2

export default class scrollbox extends React.Component<{}, {active: string}> {

  constructor(props:any){
    super(props)

    // Dictionary state

    this.state = {
      defs: "Empty",
      flask: "WAITING"
    }

    // Big text (to be replaced with server query)

    this.text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."

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

    // Listeners

    document.addEventListener('keydown', (e) => {
      const keyName = e.key
      if (keyName == "Enter") {
        var box = document.getElementById('scrollbox')
        var textelement = document.getElementById('scrollboxtext')
        var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
        var addheight = Math.floor(lineheight/5)
        var excess = lineheight % 5
        for (var i=0; i<5; i++) {
          setTimeout(() => {box.scrollTop += addheight}, 200);
        }
        box.scrollTop += excess
      }
    })
  }

  // Functions

  updateText = (async(currentWord) => {
    //this.setState({defs: await getDefs(NUM_OF_USAGES, NUM_OF_DEFS, currentWord)})
    //this.setState({flask: await getInfo("test")})
    //throw new Error(this.state.flask)
  })

  searchWord = (word) => {
    //const text = e.target;
    //const formData = new FormData(form);
    //const formJson = Object.fromEntries(formData.entries());
    //let currentWord = formJson["search bar"] as string
    //this.updateText(word)
    //console.log(this.state.defs);
    throw new Error('pressed ' + word)
  }

  renderText = () => {return(
    <div>
      {this.text.split(/( )/).map(word => <span onClick={() => {this.searchWord(word)}}>{word}</span>)}
    </div>
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

  render(): React.ReactNode {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            


            {/* Box */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Section Heading Goes Here</h4>
              <div style={this.divstyle} id="scrollbox">
                <p className="text-lg text-gray-400 text-center" style={this.textstyle} id="scrollboxtext">{this.renderText()}</p>
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
