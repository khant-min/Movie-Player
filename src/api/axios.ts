import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});
