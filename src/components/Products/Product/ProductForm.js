
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/Shopping/shopping-actions';
function ProductForm() {
  
 
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();


 
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    console.log(id);
    dispatch(addProduct({ id,name,category, price, quantity, imageUrl }));
    setName('');
    setPrice('');
    setCategory('');
    setQuantity('');
    setImageUrl('');
  };
return (


<div className="formContainer" onSubmit={handleSubmit}>
  <h4 className="formTitle">Add New Product</h4>
  <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
   

    <div className="space-y-2">
      <label htmlFor="lws-inputName">Product Name</label>
      <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      className="addProductInput" 
      id="lws-inputName" 
      type="text" required />
    </div>
  

    <div className="space-y-2">
      <label htmlFor="lws-inputCategory">Category</label>
      <input
       value={category} 
       onChange={(e) => 
       setCategory(e.target.value)}
       className="addProductInput" 
       id="lws-inputCategory" 
       type="text" required />
    </div>
   
    <div className="space-y-2">
      <label htmlFor="lws-inputImage">Image Url</label>
      <input 
      value={imageUrl} 
      onChange={(e) => 
      setImageUrl(e.target.value)}
      className="addProductInput" 
      id="lws-inputImage" 
      type="text" required />
    </div>
   

    <div className="grid grid-cols-2 gap-8 pb-4">
     
      <div className="space-y-2">
        <label htmlFor="ws-inputPrice">Price</label>
        <input 
        value={price}
        onChange={(e) => 
        setPrice(e.target.value)} 
        className="addProductInput" 
        type="number" 
        id="lws-inputPrice" required />
      </div>
     
      <div className="space-y-2">
        <label htmlFor="lws-inputQuantity">Quantity</label>
        <input 
        value={quantity} 
        onChange={(e) => 
        setQuantity(e.target.value)}
        className="addProductInput" 
        type="number" 
        id="lws-inputQuantity" 
        required />
      </div>
    </div>
    
    <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
  </form>
</div>

)
};

export default ProductForm;