import * as React from "react";
import Dictionary from "../lib/dictionary"
export default class DicButton extends React.Component <{}> {
    dic: Dictionary;
    constructor(props) {
        super(props);
        this.dic = new Dictionary();
        console.log("A");
    }

    handleSearch(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let word  = formJson["search bar"] as string;
        console.log(word);
        console.log(this.dic);
        this.dic.lookup(word);
        console.log(this.dic.getDefs(1, 1));
    }

    render(): React.ReactNode {
        return(
            <div>
                <h3>ATTEMPT AT DICTIONARY</h3>
                <form method = "post" onSubmit = {this.handleSearch}>
                    <label>
                        Search for: <input type="text" name="search bar"/>
                    </label>
                    <button type = "submit"></button>
                </form> 
            </div>
        )
    }
}