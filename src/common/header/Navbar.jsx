import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <h4>
              <i className="fa fa-map-marker"></i> Dhaka,1212
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">Fresh</Link>
              </li>
              <li>
                <Link to="/pages">Today's Deals</Link>
              </li>
              <li>
                <Link to="/user">Mobiles</Link>
              </li>
              <li>
                <Link to="/vendor">Gift Cards</Link>
              </li>
              <li>
                <Link to="/track">Women Clothing</Link>
              </li>
              <li>
                <Link to="/contact">Men Clothing</Link>
              </li>
              <li>
                <Link to="/user">Health</Link>
              </li>
              <li>
                <Link to="/user">Pet Corner</Link>
              </li>

              <li>
                <Link to="/user">Books</Link>
              </li>
              <li>
                <Link to="/user">Sports</Link>
              </li>
              <li>
                <Link to="/user">Bag</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
