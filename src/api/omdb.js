import axios from "axios";

const API_KEY = "cdf84453";

const omdbApi = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: API_KEY,
  },
});

//  Search Movies
export const searchMoviesApi = async (query, page = 1, type = "") => {
  const response = await omdbApi.get("", {
    params: {
      s: query,
      page,
      type,
    },
  });

  return response.data;
};

export default omdbApi;
