import axios from "axios";

const Api = axios.create({
    baseURL: "https://hn.algolia.com/api/v1/search?query=",
});

export default Api;