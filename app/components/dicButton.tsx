import * as React from "react";
import Dictionary from "../lib/dictionary"

export default class DicButton extends React.Component <{}> {
    dic: Dictionary;
    constructor(props) {
        super(props);
        this.dic = new Dictionary();
        console.log("A");
    }

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        this.dic.lookup(formJson["search bar"] as string);
        console.log(this.dic.getDefs(2,2));
        console.log(this.dic.currentWord);
    }

    
    handleSearch(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        return formJson["search bar"] as string;
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