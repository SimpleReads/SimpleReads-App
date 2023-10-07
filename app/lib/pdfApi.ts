export default function readPDF(data) {
    async function post(data) {
      const response = await fetch("http://localhost:3001/parsePDF", {
        method: "POST",
        body: data,
      });
  
      if (!response.ok) {
        console.log(response.json());
        throw new Error("AAAA");
      }
  
      const result = await response.json();
      console.log(result.message);
      return result.message;
    }
  
    // Taking data and turning into into a form data object so it can be accessed after
    // the post req
    let form = new FormData();
    console.log(typeof(data))
    form.append("File", data);
    return post(form);
  }
  