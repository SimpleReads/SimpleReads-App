import * as React from "react";
import getFlask from "@/lib/flaskGrab";
import postFlask from "@/lib/postToFlask"; // assuming you also have a postFlask function

export default class AdminStatusBar extends React.Component<{}, {status: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            status: "Empty"
        };
    }

    updateText = async (status: string, data?: any) => {
        if (data) {
            let msg = postFlask(status, data);
            this.setState({status: await msg});
        } else {
            let msg = getFlask(status);
            this.setState({status: await msg});
        }
    };

    setOn = () => {
        this.updateText("hello_world");
    }

    setOff = () => {
        this.updateText("test");
    }

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let text1 = formJson["text1"] as string;
        let textEtc = formJson["textEtc"] as string;
        let data = {"text1": text1, "textEtc": textEtc};
        this.updateText("simplifyText", data);
        console.log(data);
    }

    render(): React.ReactNode {
        return(
            <>
            <div>
                <button onClick={this.setOn}>SHIT</button>
                <button onClick={this.setOff}>FART</button>
            </div>
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
        );
    }
}
