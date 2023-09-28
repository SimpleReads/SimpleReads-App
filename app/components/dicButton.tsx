import * as React from "react";
import getDefs from "../lib/getDefs"
import getInfo from "../lib/flaskGrab"
let NUM_OF_DEFS = 2
let NUM_OF_USAGES = 2

export default class DicButton extends React.Component<{}, {defs: string, flask: string}> {

    constructor(props: any){
        super(props);
        this.state = {
            defs: "Empty",
            flask: "WAITING"
        }
    }
    
    updateText = (async(currentWord) => {
        this.setState({defs: await getDefs(NUM_OF_USAGES, NUM_OF_DEFS, currentWord)})
        this.setState({flask: await getInfo("test")})

    });

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let currentWord = formJson["search bar"] as string
        this.updateText(currentWord);
        console.log(this.state.defs);
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
                {this.state.defs.split('\n').map(e => <p>{e}</p>)}
                {this.state.flask}
            </div>
        )
    }
}