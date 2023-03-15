import apiClient from "../helpers/apiClient";

class FruitsService {
	getAllFruits = () => {
		return new Promise((resolve, reject) => {
			apiClient().get()
				.then((response) => {
					const { data } = response;
					if (data) {
						resolve(data);
					} else {
						reject(response.data.error);
					}
				})

		})
	};

	//simula o delay da api para o loading aparecer
	delay = (seconds) => {
		let time = seconds * 1000
		return new Promise(res => setTimeout(res, time))
	}
}

export default new FruitsService();
