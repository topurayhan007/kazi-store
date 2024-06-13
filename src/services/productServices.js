import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/api/products/`);
  return response.data;
};

export default { getProducts };
