import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Your Search Items</h2>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
