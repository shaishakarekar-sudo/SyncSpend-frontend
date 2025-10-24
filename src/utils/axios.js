export const initAPI = (token) => {
  const api = axios.create({
    baseURL: "http://localhost:5006",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return api;
};
