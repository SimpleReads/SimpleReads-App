'use client'
import * as React from 'react'
import ReactDOM from 'react-dom'
export default class Scrollbox extends React.Component<{}, {sections: string[], text}> {

    static divstyle = {
        overflow: 'auto',
        height: 'min(90vh - 200px, 600px)'
    };
    static btnstyle = {
        margin: '10px 5px 10px 5px',
        fontSize: '32px',
        fontWeight: '900'
    };
    static textstyle = {
        fontSize: '28px',
        scrollBehavior: 'smooth'
    };
    static btncontainer = {
        marginLeft: 'auto',
        marginRight: '0'
    };

  constructor(props:any){
    super(props)


    this.state = {
        sections: ["Abstract", "Introduction", "Methods", "Results", "Discussion"],
        text: {}
    }

    // Dictionary state
    // Big text (to be replaced with server query)
    //this.text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
    // Initialise empty text
    for (const section of this.state.sections) {
      this.state.text[section] = null
    }
    // Fill out with hard coded
    var abstract = "n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat n voluptate velit esse cillum dolore eu fugiat"
    
    var introduction = "fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint fugiat nulla pariatur. Excepteur sint  fugiat nulla pariatur. Excepteur sint"
   
    var methods = "nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur. Excepteur sint occaecat cupidatat"
    
    var results = "velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu velit esse cillum dolore eu"
    
    var discussion = "Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in Duis aute irure dolor in"
    this.state.text['Abstract'] = abstract
    this.state.text['Introduction'] = introduction
    this.state.text['Methods'] = methods
    this.state.text['Results'] = results
    this.state.text['Discussion'] = discussion
    // Styles
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
        {this.state.sections.map((section, index) => (
          <div>
            {<p style={Scrollbox.textstyle} className="scrollboxtext" id={section}>
              {this.state.text[section].split(/( )/).map(word => <span onClick={() => {this.searchWord(word)}}>{word}</span>)}
            </p>}
          </div>
        ))}
      </>
    )
  }

  increaseFontSize = () => {
    var box = document.getElementsByClassName('scrollboxtext')
    for (const b of box) {
	    var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'))
	    if (fontsize < 79) {
	      b.style.fontSize = (fontsize + 2) + 'px'
	    }
    }
  }

  decreaseFontSize = () => {

    Array.from(document.getElementsByClassName("scrollboxtext")).forEach(function(item) {
        var fontsize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'))
	    if (fontsize > 17) {
	    	item.style.fontSize = (fontsize - 2) + 'px'
	    }
    });
  }

  scrollUp = () => {
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

  scrollDown = () => {
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
  scrollTo = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementById('')
  }
  componentDidMount = () => {
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
    for (const section of this.state.sections) {
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
              <div style={Scrollbox.divstyle} id="scrollbox">
                {this.renderText()}
              </div>
              <div style={Scrollbox.btncontainer}>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={Scrollbox.btnstyle} onClick={this.scrollUp}>scroll up</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={Scrollbox.btnstyle} onClick={this.scrollDown}>scroll down</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={Scrollbox.btnstyle} onClick={this.increaseFontSize}>+</button>
                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                style={Scrollbox.btnstyle} onClick={this.decreaseFontSize}>-</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}