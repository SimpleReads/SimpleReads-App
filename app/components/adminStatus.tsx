import * as React from "react";
import getDefs from "../lib/getDefs"
import { deflateSync } from "zlib";
let NUM_OF_DEFS = 2
let NUM_OF_USAGES = 2

export default class AdminStausBar extends React.Component<{}, {status: string}> {

    constructor(props: any){
        super(props);
        this.state = {
            status: "Empty"
        }
    }
    
    updateText = (async(status) => {
        this.setState({status: status})
    });

    setActive = () => {
        this.updateText("Shitting")
    }

    setDisabled = () => {
        this.updateText("Farting")
    }

    render(): React.ReactNode {
        return(
            <>
            <div>
                <button onClick={this.setActive}>SHIT</button>
                <button onClick={this.setDisabled}>FART</button>
            </div>
            <div>
                <h3>{this.state.status}</h3>
            </div>
            </>
        )
    }
}