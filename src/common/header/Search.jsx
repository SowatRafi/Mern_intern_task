import React from "react";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="box">
            <h1>Shopcart</h1>
          </div>

          <div className="search-box f_flex">
            <input type="text" placeholder="   Search " />
            <i className="fa fa-search"></i> <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
