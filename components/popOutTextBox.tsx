'use client'

import React, { useState } from 'react';

/**
 * 
 * @returns 
 */
function PopOutTextBox() {
    // Set a varaible to track the visibility of the text box.
    const [isTextBoxVisible, setTextBoxVisibility] = useState(false);
    // Set a variable to track the position of the pop-out text box
    const [textBoxLayout, setTextBoxLayout] = useState({ x: 0, y: 0 });
    // Set a variable to track whether the pop-out text box is being dragged
    const [dragging, setDragging] = useState(false);
    // Set a variable to store the offset between the mouse pointer and the pop-out text box's top-left corner
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Create a function to toggle the visibility of the text box when a button is clicked.
    const toggleTextBox = () => {
        setTextBoxVisibility(!isTextBoxVisible);
    };

    // Create a function to close the text box when an x button is clicked.
    const closeTextBox = () => {
        setTextBoxVisibility(false);
    }; 

    // Event handler for when the mouse button is pressed on the pop-out text box
    const handleMouseDown = (e) => {
        if (!isTextBoxVisible) {
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
        // Create a div element to hold the button and pop out text box
    <div className="popout-container">
        {/* Create a button element and attach a click event handler. */}
        <button onClick={toggleTextBox} className = "btn text-gray-900 bg-purple-700 hover:bg-purple-800 w-full">
            Toggle Pop Box 
        </button>
        

        {/*Display the text box based on state. */}
        {isTextBoxVisible && (
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

            {/* Tell Jack hes a cutie */}
            <p>Hello Jack (insert winkie face).</p>
        </div>
        )}
    </div>
    );
}

export default PopOutTextBox;