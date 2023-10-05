'use client'

import React, { useState } from 'react';

/**
 * 
 * @returns 
 */
function PopOutTextBox() {
  // Set a varaible to track the visibility of the text box.
  const [isTextBoxVisible, setTextBoxVisibility] = useState(false);

  // Create a function to toggle the visibility of the text box when a button is clicked.
  const toggleTextBox = () => {
    setTextBoxVisibility(!isTextBoxVisible);
};
    return (
        // Create a div element to hold the button and pop out text box
    <div className="popout-container">
        {/* Create a button element and attach a click event handler. */}
        <button onClick={toggleTextBox}>Toggle Text Box</button>

        {/*Display the text box based on state. */}
        {isTextBoxVisible && (
        <div className="popout-text-box">
            {/* Tell Jack hes a cutie */}
            <p>Hello Jack (insert winkie face).</p>
        </div>
        )}
    </div>
    );
}

export default PopOutTextBox;