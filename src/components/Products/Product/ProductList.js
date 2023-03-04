import React from "react";


// Redux
import { connect } from "react-redux";
import Product from "./Product";
import ProductForm from "./ProductForm";

const ProductList = ({ products }) => {


    return (
      <main className="py-16">
         <div className="productWrapper">
         <div className="productContainer" id="lws-productContainer">
       {products.length === 0 ? (
        <p>No product Found.But You can add</p>) : (
      products && products.map((product)=>
      (<Product  product={product} key={product.id}/>))
        )}
    </div>
    <div>
    <ProductForm />
  </div>
</div>
</main>
);
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductList);
