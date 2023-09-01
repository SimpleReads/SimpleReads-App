import * as React from "react";
import getDefs from "../lib/getDefs"
let NUM_OF_DEFS = 2
let NUM_OF_USAGES = 2

export default class DicButton extends React.Component <{}> {

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let currentWord = formJson["search bar"] as string
        let str = getDefs(NUM_OF_USAGES, NUM_OF_DEFS, currentWord);
        console.log(str);
        console.log(currentWord);
    }


    render(): React.ReactNode {
        return(
            <div>
                <h3>ATTEMPT AT DICTIONARY</h3>
                <form method = "post" onSubmit = {this.onSubmit}>
                    <label>
                        Search for: <input type="text" name="search bar"/>
                    </label>
                    <button type = "submit"></button>
                </form> 
            </div>
        )
    }
}