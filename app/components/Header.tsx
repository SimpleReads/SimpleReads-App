import React from 'react';

// Style the Header bar
const headerbarstyle: React.CSSProperties = {
    backgroundColor: "black", /* Set the  background colour of the Nav bar the indicated colour */
    color: "white", /* Set the colour of the text to display */
    padding: "20px", /* Adds padding for space; makes the box bigger or smaller*/
    textAlign: "center", /* Aligns the text to the center of the page */

};

// Creates a Header at the top of the page. 
const Header: React.FC = () => { 
    return(
        <header style={headerbarstyle}>
            <h1> SimpleReads </h1>
        </header>
    );
} ;

export default Header;