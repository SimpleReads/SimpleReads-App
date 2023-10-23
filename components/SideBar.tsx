import * as React from 'react'
import PopUpBox from './popUpBox';

/**
 * Sidebar Component - houses all the features such as define, simplfy and scollbox
 * @param {array} sections - An array of section headers.
 * @param {function} triggerSimplify - Function to trigger text simplification.
 * @param {function} triggerGPT4 - Function to trigger GPT-4 text simplification.
 * @param {function} toggleDefine - Function to toggle word definitions.
 * @param {function} changeFont - Function to change the font size.
 * @param {function} uploadFile - Function to upload a file.
 * @param {string} def - Word definitions.
 */
export default function SideBar({sections, triggerSimplify, triggerGPT4, triggerDotPoints, toggleDefine, changeFont, uploadFile, scrollTo, def}) {
    // State variables to handle the components behaviour 
    const [defining, setDefining] = React.useState<number>(0)

    // Function which toggles defining a word
    const flickDefine = () => {
        let val = defining
        val > 0 ? val = 0 : val = 1;
        setDefining(val)
        toggleDefine(val);
    }

    return (
        <div className="row-auto">
          <div className='pt-24 pb-0 md:pt-24 md:pb-0'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="max-w-3xl mx-auto text-center"> {/* Title of particular section */}
                    <h3 style = {{fontSize: '40px'}} className="h4 mb-4" data-aos="fade-up">Sections</h3>
                </div>
                <div className="flex flex-wrap -mx-2 mt-6 ml-2 mb-8">                    
                    <div style={{overflow: 'auto', position: 'relative' as 'relative', height: 'min(60vh - 200px, 300px)',width: "100%"}} id="section-scrollbox">
                        {sections.map((label, index) => (
                            <div className="w-full px-3 mb-3"> {/* Colletion of headrs from text in a scroll box */}
                                <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} id = {`${label}${index}button`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {() => scrollTo(`${label}${index}Header`)}>
                                    {label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-0 ml-2">
                    <div className="max-w-3xl mx-auto text-center"> {/* Title of particular section */}
                        <h3 className="h4 mb-4" style = {{fontSize: '40px'}} data-aos="fade-up">Tools</h3>
                    </div>
                    <div className="w-full px-3 mb-3"> {/* Button for Lama Model Simplification */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} onClick={() => triggerSimplify()} id = {`Simplify`} type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2">
                            Simplify (Basic)
                        </button>
                    </div>
                    <div className="w-full px-3 mb-3"> {/* Button for Chat GPT Simplification */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} onClick={() => triggerGPT4()} id = {`Simplify2.0`} type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2">
                            Simplify (Advanced)
                        </button>
                    </div>
                    <div className="w-full px-3 mb-3"> {/* Button for Chat GPT Dot Point Simplification */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} onClick={() => triggerDotPoints()} id = {`Simplify Dotpoints`} type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2">
                            Simplify (Dot Points)
                        </button>
                    </div>
                    <div className="w-full px-3 mb-3"> {/* Button for definition function */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} id = {`Define`}type = "button" className={defining > 0 ? ("btn text-gray-900 bg-purple-700 hover:bg-purple-800 w-full tracking-wider py-2") : ("btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2")} onClick = {flickDefine}>
                            {defining > 0 ? ("Click a Word to Define") : ("Define")}
                        </button>
                    </div>

                    {/*Display the text box based on state. */}
                    <PopUpBox def={def} defining={defining} closeTextBox={flickDefine}/>

                    <div className="w-full px-3 mb-3"> {/* Button for uploadin a pdf */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} id = {`Upload`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {() => uploadFile()}>
                            Upload New File
                        </button>
                    </div>
                    <div className = "w-full px-3 mb-3 grid grid-cols-2 gap-4"> {/* Button to increase text size in read area */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" onClick = {() => changeFont(2)}>
                            Font(+)
                        </button> {/* Button to decrease text size in read area */}
                        <button style={{borderRadius: '5px', fontSize: '25px', fontWeight:'400'}} id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" onClick = {() => changeFont(-2)}>
                            Font(-)
                        </button>
                    </div>  
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}