
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  console.log(cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      console.log(item);
      count += item.qty;
    });
    console.log(count);
    setCartCount(count);
  }, [cart, cartCount]);

  // const cartItems = useSelector(state => state.cart.items);
    return (

   
      <div>
        <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4">
            <Link to="/">
            <h4 className="navHome" id="lws-home"> Home </h4>
            </Link>
            <Link to="/cart">
            <h4 className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartCount}</span>
            </h4>
            </Link>
          </div>
        </div>
      </nav>
     
      </div>
  


    );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);