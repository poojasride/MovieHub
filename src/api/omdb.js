import axios from "axios";

const omdbApi = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: {
        apikey: "cdf84453" // Replace with your actual OMDB API key
    }
});

export default omdbApi;