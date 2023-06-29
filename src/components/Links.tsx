import { Link } from "react-router-dom";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Links = ({ classes }: { classes: string }) => {
  const { setMenu } = useAuth() as DataContextProps;
  return (
    <ul className={`${classes}`}>
      <li>
        <Link to="home" onClick={() => setMenu(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="detail" onClick={() => setMenu(false)}>
          Detail
        </Link>
      </li>
      <li>
        <Link to="contact" onClick={() => setMenu(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Links;
