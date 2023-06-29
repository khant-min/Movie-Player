import { footerLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Footer = () => {
  const { darkTheme } = useAuth() as DataContextProps;
  const date = new Date().getFullYear();
  return (
    <footer
      className={`animate flex flex-col text-black-100 mt-5 border-t border-gray-300 ${
        darkTheme ? "bg-[#302b63] text-white" : "bg-[#eaf5c9]"
      }`}
    >
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <p className={`${darkTheme ? "text-white" : null}`}>
            Copyright {date} <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className={`footer__links ${darkTheme ? "text-white" : null}`}>
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`${
                    darkTheme ? "text-slate-400" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>Copyright @ {date} by Khant Min. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link
            to="/"
            className={`${darkTheme ? "text-slate-200" : "text-gray-500"}`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            className={`${darkTheme ? "text-slate-200" : "text-gray-500"}`}
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
