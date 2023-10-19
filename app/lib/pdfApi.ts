/**
 * Process a pdf by sending it to a server API for parsing and return the results
 *
 * @param data - data whcih si a pdf 
 */
export default function readPDF(data) {
  // Function which to post the PDF file to the server API for parsing
  async function post(formData) {
    console.log("pdfApi.ts");

    // Sends a POST request to the '/api/parsePDF' endpoint with the PDF data
    const response = await fetch("/api/parsePDF", {
      method: "POST",
      body: formData,
    });

    console.log("response", response);

    if (!response.ok) {
      // Handle the case where the response is not OK (e.g an error response)
      const errorData = await response.json();
      console.log(errorData);
      throw new Error("Error 404");
    }

    // Parse the result from the server
    const result = await response.json();
    console.log(result.message);
    return result.message;
  }

  // Create a new FormData object and append the PDF file to it
  let form = new FormData();
  console.log(typeof data);
  form.append("File", data);

  // Call the post function to send the PDF to the server and return the result
  return post(form);
}
