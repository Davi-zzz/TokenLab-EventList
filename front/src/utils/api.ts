import axios from "axios";
const api = axios.create({baseURL: 'http://localhost:3000', timeout: 10000, timeoutErrorMessage: 'the API couldnt response'});
export default api;