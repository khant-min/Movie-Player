import { createContext, useContext, useState, useEffect } from "react";
import { DataContextProps } from "../global.types";
import axios from "../api/axios";

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `?page=${page}&include_adult=true&include_video=true&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setMovies(data.results);
    })();
  }, [page]);

  return (
    <DataContext.Provider
      value={{ movies, setPage, search, setSearch, dark, setDark }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => useContext(DataContext);

export default DataContext;
