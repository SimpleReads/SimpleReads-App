export default function getFlask(path) {
  async function getInfo(path) {
    const response = await fetch(`http://54.212.16.183:5000/${path}`);
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
