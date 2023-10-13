export const postFlaskAPI = async (path, data) => {
  const response = await fetch("/api/parsePDF", {
    method: "POST",
    body: data,
  });
  const responseData = await response.json();
  return responseData.message;
};
