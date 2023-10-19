/**
 * Takes an array of sectiosn and simplifies it. Returns the simplified text
 * @param sections array of text
 * @returns simplified array of text
 */
export default async function simplifyPDF(sections: string[]): Promise<string[]>{
    let simplified_sections: string[] = []

    // Loop through each section in the input array
    for (let i = 0; i < sections.length; i++) {
        let data = JSON.stringify({"text": sections[i]})

        // Call the simplifySegment function to simplify the section
        let newtext = await simplifySegment(data)

        // Add the simplified section to the result array
        simplified_sections.push(newtext)
    }
    return simplified_sections
}

// Helper function to simplify a single segment using an API endpoint
const simplifySegment = async (data: string) => {
    try {
        const response = await fetch("/api/simplifyText", {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: data,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error from server:", errorData);
        } else {
            const result = await response.json();
            return result.message;
        }
    } catch (error) {
        console.error("Error:", error);
    }
};