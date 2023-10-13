export const postFlaskAPI = async (data) => {
  const response = await fetch("/api/getFlask", {
    method: "GET",
    body: data,
  });
  const responseData = await response.json();
  return responseData.message;
};
