import SidebarComp from "../Sidebar/SidebarComp";
import "./navbar.scss";

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <SidebarComp />
      <div className="wrapper">
        <span>Ardhiyan's Portfolio</span>
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
