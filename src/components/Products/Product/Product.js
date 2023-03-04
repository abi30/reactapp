import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  addToCart, loadCurrentItem
} from "../../../redux/Shopping/shopping-actions";

// Redux
const Product = ({ product, addToCart, loadCurrentItem }) => {
    return (
      
      <div className="lws-productCard">
          <img className="lws-productImage" src= {product.imageUrl} alt={product.name} />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{product.name}</h4>
            <p className="lws-productCategory">{product.category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
            </div>
            <Link to={`/product/${product.id}`}>
            <button 
             onClick={() => loadCurrentItem(product)}
             className="lws-btnAddToCart">View Item</button>
           </Link>
            <button
             disabled={product.quantity === 0}  
             onClick={() => addToCart(product)}
             className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    );
}



const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: (id) => dispatch(addToCart(id)),
    addToCart: (item) => dispatch(addToCart(item)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
