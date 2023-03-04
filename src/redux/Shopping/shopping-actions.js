import * as actionTypes from "./shopping-types";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload:item,
  
    // payload: {
    //   id: itemID,
    // },
  };
};

export const addProduct= (product) =>{
  return { type: actionTypes.ADD_PRODUCT, payload: product };
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
