import * as React from 'react'

export default function PopUpBox({def, defining, closeTextBox}){
    const [textBoxLayout, setTextBoxLayout] = React.useState({ x: 0, y: 0 });
    const [dragging, setDragging] = React.useState(false);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });

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

    if (def && defining) {
        return (<div className="popout-text-box" style={{
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
        </div>)
    }
    else {
        return <></>
    }
}