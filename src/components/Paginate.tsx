import { Pagination } from "@mui/material";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { useState, useEffect } from "react";

const Paginate = () => {
  const { setPage } = useAuth() as DataContextProps;
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    innerWidth > 576 ? setMobile(false) : setMobile(true);
  }, [innerWidth]);

  return (
    <div className="center mt-10">
      <Pagination
        count={20}
        variant="outlined"
        shape="rounded"
        size={mobile ? "small" : "large"}
        onClick={(e) => setPage((e.target as any).textContent)}
      />
    </div>
  );
};

export default Paginate;
