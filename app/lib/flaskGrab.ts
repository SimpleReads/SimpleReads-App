export default function getFlask(path) {
  async function getInfo(path) {
    const response = await fetch(`http://localhost:3001/${path}`);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(
        `Error fetching from server: ${errorData.error || "Unknown error"}`
      );
    }

    const result = await response.json();
    console.log(result);
    return result.message;
  }

  return getInfo(path);
}
