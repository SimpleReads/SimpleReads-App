export default function readPDF(data) {
  async function post(formData) {
    console.log("pdfApi.ts");

    const response = await fetch("/api/parsePDF", {
      method: "POST",
      body: formData,
    });

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error("AAAA");
    }

    const result = await response.json();
    console.log(result.message);
    return result.message;
  }

  let form = new FormData();
  console.log(typeof data);
  form.append("File", data);
  return post(form);
}
