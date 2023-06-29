import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  headers: {
    Authorization: `Bearer eyJhdWQiOiJmZmY1YzA4YTBjZmMyOGJiNmI1YzQ0ZTFhMTg1MDQwYSIsInN1YiI6IjY0OWIwOWZkMjk3NWNhMDBlN2U0YjliYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ`,
  },
});
