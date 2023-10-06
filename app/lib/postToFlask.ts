export default function postFlask(path: string, data) {
  async function post(path, data) {
    const response = await fetch(`http://localhost:3001/${path}`, {
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
  for (var key in data) {
    console.log(key, data);
    form.append(key, data[key]);
  }

  return post(path, form);
}
