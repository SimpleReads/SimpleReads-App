export default function readPDF(data) {
    async function post(data) {
        console.log("new ip: 54.212.16.183")
      const response = await fetch("http://54.212.16.183:5000/parsePDF", {
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
  