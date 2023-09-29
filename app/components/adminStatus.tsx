import * as React from "react";
import getFlask from "@/lib/flaskGrab";

export default class AdminStausBar extends React.Component<{}, {status: string}> {

    constructor(props: any){
        super(props);
        this.state = {
            status: "Empty"
        }
    }
    
    updateText = (async(status) => {
        let msg = getFlask(status)
        this.setState({status: await msg})
    });

    setOn = () => {
        this.updateText("hello_world")
    }

    setOff = () => {
        this.updateText("test")
    }

    render(): React.ReactNode {
        return(
            <>
            <div>
                <button onClick={this.setOn}>SHIT</button>
                <button onClick={this.setOff}>FART</button>
            </div>
            <div>
                <h3>{this.state.status}</h3>
            </div>
            </>
        )
    }
}