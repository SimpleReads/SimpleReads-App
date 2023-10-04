'use client'

import * as React from "react"

export default class sidebox extends React.Component<{}, {active: string}> {

  constructor(props:any){
    super(props)
    this.sections = ["Abstract", "Introduction", "Methods", "Results", "Discussion"];
  }

  // functions

  keepScroll(section) {
    //scroll
    var box = document.getElementById('scrollbox')
    var offset = box.getBoundingClientRect().top
    var text = document.getElementById(section)
    var distance = text.getBoundingClientRect().top
    box.scrollTop += distance-offset

    //change heading
    var heading = document.getElementById('Heading')
    heading.innerHTML = section
  }

  changeHeading(section)

  render(): React.ReactNode {

    return (
      <div className="max-w-sm mx-auto">
        <div className="flex flex-wrap -mx-3 mt-6 ml-2">
          {this.sections.map((section, index) => (
            <div className="w-full px-3 mb-7">
              <a className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full" onClick={() => {this.keepScroll(section)}}>{section}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}