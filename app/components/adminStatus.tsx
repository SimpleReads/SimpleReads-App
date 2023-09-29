import * as React from "react";
import postFlask from "@/lib/postToFlask";

//Simple dual input and submit buttom for model testing and development of model APIs
export default class AdminStausBar extends React.Component<{}, {status: string}> {

    constructor(props: any){
        super(props);
        this.state = {
            status: "Empty"
        }
    }
    

    updateText = (async(status, data) => {
        let msg = postFlask(status, data);
        this.setState({status: await msg});
    });

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let text1 = formJson["text1"] as string
        let textEtc = formJson["textEtc"] as string
        // This needs to be synced with the key values in the flask app or will error ATM (will put error catch
        // once model specifics for flask call have been finalised)
        let data = {"text1": text1, "textEtc": textEtc}
        this.updateText("simplifyText", data)
        console.log(data)
    }

    render(): React.ReactNode {
        return(
            <>
            <div>
                <form method = "post" onSubmit = {this.onSubmit}>
                    <label>
                        Input Text 1: <input type="text" name="text1" defaultValue="Text 1"/>
                    </label>
                    <label>
                        Input Text 2: <input type="text" name="textEtc" defaultValue="TextEtc"/>
                    </label>
                    <button type = "submit">SEND INFO TO FLASK</button>
                </form>
            </div>
            <div>
                <h3>{this.state.status}</h3>
            </div>
            </>
        )
    }
}