import axios from "axios";

// use your API url
export const gameapi = axios.create({
	baseURL: "http://localhost:8082/api/rest"
});
