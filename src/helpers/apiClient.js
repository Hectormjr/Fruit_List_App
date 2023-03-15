import axios from "axios";

const apiClient = () => {
	const FRUIT_API_URL  = "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json";

	const axiosInstance = axios.create({
		baseURL: FRUIT_API_URL,
		responseType: "json",
	});

	return axiosInstance;
};

export default apiClient;
