import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 10,
      name: "This is the COOLEST Cube Ever",
      category:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      quantity: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      name: "Large Coffee Cup",
      category:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      quantity: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    // {
    //   id: 3,
    //   title: "Books That CHANGED My Life",
    //   description:
    //     "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
    //   price: 150.0,
    //   quantity: 10,
    //   image:
    //     "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    // },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      // const item = state.products.find(
      //   (product) => product.id === action.payload.id
      // );
      // console.log(item);
      // // Check if Item is in cart already
      // const inCart = state.cart.find((item) =>
      //   item.id === action.payload.id ? true : false
      // );
      // console.log(inCart);
      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map((item) =>
      //         item.id === action.payload.id
      //           ? { ...item, qty: item.qty + 1 }
      //           : item
      //       )
      //     : 
      //     [...state.cart, { ...item, qty: 1 }],

      //     products: inCart
      //     ? state.products.map((item) =>
      //          item.id === action.payload.id
      //           ? { ...item, quantity: item.quantity - 1 }
      //           : item
      //       )
      //     // : [...state.products, { ...item, quantity: item.quantity - 1 }],
      //     : [...state.products,{...item, quantity: item.quantity - 1 }],
      // };


      const cartItemToAdd = action.payload;
      const item = state.products.find( (product) =>
       product.id === cartItemToAdd.id
        );
        console.log(item);
        const inCart = state.cart.find((item) =>
        item.id === cartItemToAdd.id ? true : false
        );
        console.log(inCart);

       
          
          

      const updatedProductsAfterAdd = state.products.map((product) => {
        if (product.id === cartItemToAdd.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      const testcartItemToAdd = state.cart.map((item) => {
        console.log(item);
        if (item.id === cartItemToAdd.id) {
          return  { ...item, qty: item.qty + 1 };
        }
        return  [...state.cart, { ...item, qty: 1 }];
        // return item;
      });
      console.log(testcartItemToAdd); 
      return {
        ...state,
        products: updatedProductsAfterAdd,
       
        // cart: [...state.cart, cartItemToAdd],
        cart: inCart
        ? state.cart.map((item) =>
            item.id === cartItemToAdd.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : 
        [...state.cart, { ...item, qty: 1 }],
      
      };
    
    case actionTypes.ADJUST_ITEM_QTY:
      const {id,qty} = action.payload;
    console.log(action);

    const quantityOfCartItem = state.cart.find( (item) =>
      (id === item.id ) ?? item
    );
     console.log(quantityOfCartItem );
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: quantityOfCartItem.quantity - qty}
            : item
        ),
      };


      case actionTypes.REMOVE_FROM_CART:
        
        const beforequantityOfCartItem = state.cart.find( (item) =>
        (item.id === action.payload.id) ?? item
        );
        console.log(beforequantityOfCartItem);
        
      const updatedProductsAfterCartDetlete = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: beforequantityOfCartItem.quantity};
        }
        return product;
      });
      return {
        ...state,
        // products: state.cart.filter((item) => item.id !== action.payload.id),
        products: updatedProductsAfterCartDetlete,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };


    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };


    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products , action.payload],
      };
    default:
      return state;
  }
};

export default shopReducer;
