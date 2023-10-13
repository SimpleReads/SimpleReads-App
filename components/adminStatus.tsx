import * as React from "react";
import { getFlaskAPI } from "@/app/lib/getFlask";
import { postFlaskAPI } from "@/app/lib/postFlask"; // assuming you also have a postFlask function
import Link from 'next/link'

export default function AdminStatusBar() {
    
    const [status, setStatus] = React.useState<String>("Waiting");

    const updateText = async (status: string, data?: any) => {
        if (data) {
            let msg = postFlaskAPI(status, data);
            setStatus(await msg)
        } else {
            let msg = getFlaskAPI("hello_world");
            let message = msg["message"]
            setStatus(await message)
        }
    };

    const setOn = () => {
        updateText("hello_world");
    }

    const setOff = () => {
        updateText("test");
    }

    const onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let text1 = formJson["text1"] as string;
        let textEtc = formJson["textEtc"] as string;
        let data = {"text1": text1, "textEtc": textEtc};
        updateText("simplifyText", data);
        console.log(data);
    }


  return (
    <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            {/* Hero content */}
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 mb-4" data-aos="fade-up">ADMIN TESTING PAGE</h1>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div data-aos="fade-up" data-aos-delay="400">
                            {/** I think we will be able to use the <FileUpload> instead of <Link>*/}
                            <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" onClick = {setOn}>Start</button>
                            <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" onClick = {setOff}>Stop</button>
                        </div>
                    </div>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div data-aos="fade-up" data-aos-delay="400">
                            {/** I think we will be able to use the <FileUpload> instead of <Link>*/}
                            <form method = "post" onSubmit = {onSubmit}>
                                <label>
                                    Input Text 1: <input type="text" name="text1" defaultValue="Text 1"/>
                                </label>
                                <label>
                                    Input Text 2: <input type="text" name="textEtc" defaultValue="TextEtc"/>
                                </label>
                                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" type = "submit">SEND INFO TO FLASK</button>
                            </form>
                            <p className="text-xl text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="200">Status = {status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}