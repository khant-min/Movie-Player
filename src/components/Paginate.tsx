import { Pagination } from "@mui/material";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Paginate = () => {
  const { setPage } = useAuth() as DataContextProps;

  return (
    <div className="center mt-10">
      <Pagination
        count={20}
        variant="outlined"
        shape="rounded"
        onClick={(e) => setPage((e.target as any).textContent)}
      />
    </div>
  );
};

export default Paginate;
