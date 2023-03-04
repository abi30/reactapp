import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <main className="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>

    <div className="cartListContainer">
    
       <div className="space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

          <div>
          <div className="billDetailsCard">
            <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
            <div className="space-y-4">
          
              <div className="flex items-center justify-between">
                <p>Sub Total</p>
                <p>BDT <span className="lws-subtotal">{totalPrice}</span></p>
              </div>
            
              <div className="flex items-center justify-between">
                <p>Discount</p>
                <p>BDT <span className="lws-discount">0</span></p>
              </div>
            
              <div className="flex items-center justify-between">
                <p>VAT</p>
                <p>BDT <span className="vat">0</span></p>
              </div>
            
              <div className="flex items-center justify-between pb-4">
                <p className="font-bold">TOTAL :{totalItems}</p>
                <p className="font-bold">BDT <span className="lws-total">{totalPrice}</span></p>
              </div>
              <button className="placeOrderbtn">place order</button>
            </div>
          </div>
          </div>
     </div>
    </div>
  </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
