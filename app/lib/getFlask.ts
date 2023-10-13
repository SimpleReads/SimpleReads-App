export const getFlaskAPI = async (path) => {
  const response = await fetch(`/api/getFlask?path=${path}`);
  const data = await response.json();
  return data.message;
};
