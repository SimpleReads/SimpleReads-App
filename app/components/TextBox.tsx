import React, {useState} from 'react'; /* import "usestate" hook too manage state within a functional component*/

// Renders a textbox that displays inputted text 
const TextBox: React.FC = () => {

    // Declare a variable to store the text using the usestate hook. Variable is initially an empty string. SetText updates the variable
    const [text, setText] = useState<string>('');

    // Create event handler to update text with new user input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* Event Handler function that takes an argument e which is an event object of type React.ChangeEvent that take argument of input element*/
        setText(e.target.value) /*Update text variable with HTML element that triggered the event: the input field.*/
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} /> {/* input element of type text; display text in input field; trigger event handler when user types*/}
            <p> You typeed: {text}</p> {/* Paragraph element displays text*/}
        </div>
    );
};

export default TextBox;