import { createContext, useContext, useState, useEffect } from "react";
import { DataContextProps } from "../global.types";
import axios from "../api/axios";

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [darkTheme, setDarkTheme] = useState<boolean>(
    JSON.parse(localStorage.getItem("isDark")!)
  );
  const [menu, setMenu] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `/3/discover/movie?page=${page}&api_key=${import.meta.env.VITE_API_KEY}`
      );
      setMovies(data.results);
      console.log("data: ", data);
    })();
  }, [page]);

  return (
    <DataContext.Provider
      value={{
        movies,
        setPage,
        search,
        setSearch,
        darkTheme,
        setDarkTheme,
        menu,
        setMenu,
        openSearch,
        setOpenSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => useContext(DataContext);

export default DataContext;
