import * as React from "react";

export default function AdminStatusBar() {
    //Current status of the model
    const [status, setStatus] = React.useState<String>("Waiting");

    //Updates the text to reflect the current status of the model
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

    const setOn = () => { //Turn On
        updateText("START");
    }

    const setOff = () => { //Turn Off
        updateText("STOP");
    }

    const onSubmit = e => { //Sumbit text to the model to simplify
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        let text = formJson["text"];
        // convert to json
        let data = JSON.stringify({text});
        updateText("simplifyText", data);
    }
    
    //Element
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative" style={{ marginTop: '-50px' }}>
                <div className="relative pt-16 pb-10 md:pt-40 md:pb-16">
                    <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
                        <h1 className="h1 mb-4" data-aos="fade-up" style = {{fontSize: '65px'}}> ADMIN DASHBOARD </h1>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex">
                            <div style={{ width: "60%", padding: "1rem", border: "2px solid #000", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}} data-aos="fade-up" data-aos-delay="400">   
                                <h2 style={{ fontSize: "40px"}}> Model Operation Status </h2>
                                <p style={{ fontSize: "20px" }} data-aos="fade-up" data-aos-delay="200"> {status}</p>
                                
                                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500" style={{borderRadius: '5px', margin: "1rem 0", cursor: "pointer", fontSize: '25px', padding: '15px 25px', fontWeight:'400' }} onClick={setOn}>
                                    Start
                                </button>
                                <span style={{ padding: '0 1rem' }}></span>
                                <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500" style={{borderRadius: '5px', margin: "1rem 0", cursor: "pointer", fontSize: '25px', padding: '15px 25px', fontWeight:'400' }} onClick={setOff}>
                                    Stop
                                </button>
                            </div>
                            <span style={{ padding: '0 1rem' }}></span>
                            <div style={{ width: "60%", padding: "1rem", border: "2px solid #000", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}} data-aos="fade-up" data-aos-delay="400">
                                <h2 style={{ fontSize: "40px"}}> Flask Thingie </h2>
                                <form method="post" onSubmit={onSubmit}>
                                    <label>
                                        Input Text: <input type="text" name="text" style={{ fontSize: "20px" }} defaultValue="Text 1"/>
                                    </label>
                                    <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500" style={{borderRadius: '5px', margin: "1rem 0", cursor: "pointer", fontSize: '25px', padding: '15px 25px', fontWeight:'400' }} type="submit">
                                        SEND INFO TO FLASK
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
