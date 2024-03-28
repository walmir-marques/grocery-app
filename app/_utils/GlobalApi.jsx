const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getCategory = async () => {
  try {
    const response = await axiosClient.get("/Categories?populate=*");
    return response.data; // Retorna os dados da resposta da requisição
  } catch (error) {
    throw error; // Lança o erro caso ocorra algum problema na requisição
  }
};

export const getSliders = () => {
  return axiosClient.get("sliders?populate=*").then((response) => {
    return response.data.data;
  });
};
