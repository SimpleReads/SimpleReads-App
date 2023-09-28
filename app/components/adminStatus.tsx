import * as React from "react";
import getDefs from "../lib/getDefs"
import { deflateSync } from "zlib";
import getFlask from "@/lib/flaskGrab";
import { stat } from "fs";
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