import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropDownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathToIndex = {
      "/": 0,
      "/orders": 1,
      "/holdings": 2,
      "/positions": 3,
      "/funds": 4,
      "/apps": 5,
    };
    const currentIndex = pathToIndex[location.pathname];
    if (currentIndex !== undefined) {
      setSelectedMenu(currentIndex);
    }
  }, [location.pathname]);

  

  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "35px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link // The onClick is no longer needed here
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
              className="navlink"
              to="/"
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <p>
              <Link
                onClick={() => handleMenuClick(1)} // The onClick is no longer needed here
                style={{ textDecoration: "none" }}
                className="navlink"
                to="/orders"
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                onClick={() => handleMenuClick(2)} // The onClick is no longer needed here
                style={{ textDecoration: "none" }}
                className="navlink"
                to="/holdings"
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                onClick={() => handleMenuClick(3)} // The onClick is no longer needed here
                style={{ textDecoration: "none" }}
                className="navlink"
                to="/positions"
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                onClick={() => handleMenuClick(4)} // The onClick is no longer needed here
                style={{ textDecoration: "none" }}
                className="navlink"
                to="/funds"
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                onClick={() => handleMenuClick(5)} // The onClick is no longer needed here
                style={{ textDecoration: "none" }}
                className="navlink"
                to="/apps"
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
              </Link>
            </p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <p>a</p>
            <p>b</p>
            <p>log out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
