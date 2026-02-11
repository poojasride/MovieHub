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

  // Adjust query for episodes , because OMDB doesn't return results for episodes with the 'type' filter for episode.
  if (type === "episode") {
   type = "movie"
   query = "comedy"
   console.log("Adjusted Query for Episodes:", query);
  }

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
