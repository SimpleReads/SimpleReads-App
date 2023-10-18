import * as React from 'react'
import PopUpBox from './popUpBox';

export default function SideBar({sections, triggerSimplify, toggleDefine, changeFont, uploadFile, scrollTo, def}) {

    const [defining, setDefining] = React.useState<number>(0)
    const [textBoxLayout, setTextBoxLayout] = React.useState({ x: 0, y: 0 });
    const [dragging, setDragging] = React.useState(false);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });

    const divstyle2 = {
        overflow: 'auto',
        position: 'relative' as 'relative',
        height: 'min(60vh - 200px, 300px)',
        width: "100%"
    }

    const flickDefine = () => {
        let val = defining
        val > 0 ? val = 0 : val = 1;
        setDefining(val)
        toggleDefine(val);
    }

    //Create a function to close the text box when an x button is clicked.
    const closeTextBox = () => {
        flickDefine();
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

    return (
        <div className="row-auto">
          <div className='pt-24 pb-0 md:pt-24 md:pb-0'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="h4 mb-4" data-aos="fade-up">Sections</h3>
                </div>
                <div className="flex flex-wrap -mx-2 mt-6 ml-2 mb-8">                    
                    <div style={divstyle2} id="section-scrollbox">
                        {sections.map((label, index) => (
                            <div className="w-full px-3 mb-3">
                            <button id = {`${label}${index}button`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {() => scrollTo(`${label}${index}Header`)}>{label}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-0 ml-2">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="h4 mb-4" data-aos="fade-up">Tools</h3>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <button onClick={() => triggerSimplify()} id = {`Simplify`} type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2">Simplify</button>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <button id = {`Define`}type = "button" className={defining > 0 ? ("btn text-gray-900 bg-purple-700 hover:bg-purple-800 w-full tracking-wider py-2") : ("btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2")}
                            onClick = {flickDefine}>{defining > 0 ? ("Click a Word to Define") : ("Define")}</button>
                    </div>
                    {/*Display the text box based on state. */}
                    <PopUpBox def={def} defining={defining} closeTextBox={flickDefine}/>
                    <div className="w-full px-3 mb-3">
                        <button id = {`Upload`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {() => uploadFile()}>Upload File</button>
                    </div>
                    <div className = "w-full px-3 mb-3 grid grid-cols-2 gap-4">
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" 
                            onClick = {() => changeFont(2)}>Font (+)</button>
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" 
                            onClick = {() => changeFont(-2)}>Font (-)</button>
                    </div>  
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}