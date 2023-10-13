export const postFlaskAPI = async (path, data) => {
  const response = await fetch(`/api/postFlask?path=${path}`, {
    // Assuming you've a postFlask API route
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData.message;
};
