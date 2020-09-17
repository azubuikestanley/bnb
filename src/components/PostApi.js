export const PostAPI = (endPoint, data, method) => {
	let baseURL = 'https://http://localhost:1337/';
	return new Promise((resolve, reject) => {
		fetch(baseURL + endPoint, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((resJson) => {
				resolve(resJson);
			})
			.catch((err) => reject(err));
	});
};
