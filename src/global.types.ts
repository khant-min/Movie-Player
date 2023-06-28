export interface DataContextProps {
  movies: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}
