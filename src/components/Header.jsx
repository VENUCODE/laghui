import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaUsers,
  FaBookOpen,
  FaHandsHelping,
} from "react-icons/fa";
import { useMediaQuery } from "../custom_hook";
const navItems = [
  {
    route: "/",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "/about",
    name: "About",
    icon: FaInfoCircle,
  },
  {
    route: "/services",
    name: "Services",
    icon: FaTools,
  },
  {
    route: "/vaajlab",
    name: "Vaaj Lab",
    icon: FaUsers,
  },
  {
    route: "/resources",
    name: "Resources",
    icon: FaBookOpen,
  },
  {
    route: "/support",
    name: "Support",
    icon: FaHandsHelping,
  },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <>
      <header id="header" className="position-relative justify-content-between">
        <div className="container-fluid d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink className="logo-container" to="/"></NavLink>
          </h1>

          <nav
            id="navbar"
            className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
          >
            <ul>
              {navItems.map((routeItem) => (
                <li
                  key={routeItem.route}
                  className={
                    routeItem.sections && !isMobileNavOpen ? "dropdown" : ""
                  }
                >
                  <NavLink
                    to={routeItem.route}
                    activeClassName="active"
                    onClick={isMobile ? handleMobileNavToggle : null}
                    className={
                      routeItem.sections && !isMobileNavOpen
                        ? "dropdown-toggle"
                        : "nav-NavLink scrollto justify-content-start "
                    }
                  >
                    {routeItem.icon && <routeItem.icon />}{" "}
                    <span>{routeItem.name}</span>
                  </NavLink>

                  {/* {!isMobileNavOpen && routeItem.sections && (
                    <ul>
                      {routeItem.sections.map((section, index) => (
                        <NavLink
                          to={routeItem.route}
                          key={index}
                          activeClassName="active"
                          className={
                            routeItem.sections && !isMobileNavOpen
                              ? "dropdown-toggle"
                              : "nav-NavLink scrollto justify-content-start "
                          }
                        >
                          <span>{section.name}</span>
                        </NavLink>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>

            {isMobileNavOpen ? (
              <BsX
                className="mobile-nav-toggle"
                onClick={handleMobileNavToggle}
              />
            ) : (
              <BsList
                className="mobile-nav-toggle"
                onClick={handleMobileNavToggle}
              />
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
