export default function getFlask(path) {
  async function getInfo(path) {
    const response = await fetch(`http://localhost:3001/${path}`);
    if (!response.ok) {
      console.log(response.json());
      throw new Error("AAAA");
    }

    const result = await response.json();
    console.log(result);
    return result.message;
  }

  return getInfo(path);
}
