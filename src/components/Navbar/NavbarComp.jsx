import { motion } from "framer-motion";
import SidebarComp from "../Sidebar/SidebarComp";
import "./navbar.scss";

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <SidebarComp />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          Ardhiyan's Portfolio
        </motion.span>
        <div className="social">
          <a className="facebook" href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a className="github" href="#">
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
