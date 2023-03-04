import React from "react";

// import { connect,useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../redux/Shopping/shopping-actions";


// const CartItem = ({ item, adjustQty, removeFromCart }) => {
const CartItem = ({ item}) => {

  const dispatch = useDispatch();

  const incrementQuantity = () => {
    if (item.qty < item.quantity) {
    dispatch(
      adjustItemQty(item.id, item.qty + 1)
    );
  }
  };

  const decrementQuantity = () => {
    if (item.qty > 1) {
      dispatch(
        adjustItemQty(item.id, item.qty - 1)
      );
    }
  };
  const removeCart = (id) => {
    
      dispatch(removeFromCart(item.id) );
  
  };

  // const [input, setInput] = useState(item.qty);

  // const onChangeHandler = (e) => {
  //   setInput(e.target.value);
  //   adjustQty(item.id, e.target.value);
  // };

return (

 

<div className="cartCard">
<div className="flex items-center col-span-6 space-x-6">
  <img
    className="lws-cartImage"
    src={item.imageUrl}
    alt={item.name}
  />

  <div className="space-y-2">
    <h4 className="lws-cartName">{item.name} </h4>
    <p className="lws-cartCategory">{item.category}</p>
    <p>
      BDT <span className="lws-cartPrice">{item.price}</span>
    </p>
  </div>
</div>

<div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">


    <div className="flex items-center space-x-4">
      <button
        className="lws-incrementQuantity"
        onClick={incrementQuantity}
      >
        <i className="text-lg fa-solid fa-plus"></i>
      </button>
      <span className="lws-cartQuantity">{item.qty}</span>
      <button
        className="lws-decrementQuantity"
        onClick={decrementQuantity}
      >
        <i className="text-lg fa-solid fa-minus"></i>
      </button>
    </div>


    {/* <div className="">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div> */}



  <p className="text-lg font-bold">
    BDT <span className="lws-calculatedPrice">{item.qty * item.price}</span>
  </p>
</div>

<div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
  <button 
  //  onClick={() => removeFromCart(item.id)}
   onClick={() => removeCart(item.id)}
  className="lws-removeFromCart">
    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
  </button>
</div>
</div>);

}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItem);

export default CartItem;