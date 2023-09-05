import React from 'react';

// Creates a Navigation Bar
function NavBar() {
    // Styles any component of the navigation bar
    const styles = { 
      
        /* Style the Navigation Bar Element*/
        navbar: {
            backgroundColor: "blue", /* Set the  background colour of the Nav bar the indicated colour */
            padding: "10px", /* Adds padding for space; makes the box bigger or smaller*/
        },

        /* Style the Navigation Item Elements*/
        navitem: {
            color: "white", /* Set the text in the tab to the indicated colour */
            fontFamily: "Arial", /* Set the style fo the text displayed */
            marginRight: "10px", /* Adds a margin between the tabs */
            cursor: "pointer", /* Chanegs the cursor to a pointer when its hovering over the the text to indicate interactivity */
            display: "inline-block", /* puts all the tabs in a row */
        },
    };

    return(
        <nav className = "navbar" style={styles.navbar}>     {/*Applies nav-bar css Class to the NavBar HTML <nav> element. This allows us to style the TabBar*/} 
            <ul>                               {/*Creates an unordered list element*/}
                <li className="navItem" style={styles.navitem}> Home Page </li>            {/* Applies nav-item css class to list item <li> elements*/}
                <li className="navItem" style={styles.navitem}> About us</li>
            </ul>  
        </nav>
    );
} ;

export default NavBar;