import * as React from "react";
import Link from 'next/link'

export default function AdminStatusBar() {
    
    const [status, setStatus] = React.useState<String>("Waiting");

    const updateText = async (status: string, data?: any) => {
        console.log("status, data:", status, data);
        try {
            let endpoint;
            if (status === "START") {
                endpoint = "/api/startModel";
            } else if (status === "STOP") {
                endpoint = "/api/stopModel";
            } else if (status === "simplifyText") {
                endpoint = "/api/simplifyText";
            } else {
                throw new Error("Invalid status provided");
            }
    
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: data,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error from server:", errorData);
                setStatus("Error occurred");
            } else {
                const result = await response.json();
                setStatus(result.message || "No message returned from server");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Error occurred");
        }
    };

    const setOn = () => {
        updateText("START");
    }

    const setOff = () => {
        updateText("STOP");
    }

    const onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let text = formJson["text"];
        // convert to json
        let data = JSON.stringify({text});
        updateText("simplifyText", data);
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
                                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" onClick={setOn}>Start</button>
                                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" onClick={setOff}>Stop</button>
                            </div>
                        </div>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <form method="post" onSubmit={onSubmit}>
                                    <label>
                                        Input Text 1: <input type="text" name="text" defaultValue="Text 1"/>
                                    </label>
                                    <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" type="submit">SEND INFO TO FLASK</button>
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
