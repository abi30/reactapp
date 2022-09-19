import React,{useState,useEffect} from 'react'


function Fruits() {
    const [fruit, setfruit] = React.useState('');
    const [fruits, setfruits] = React.useState(['apple','mango','guava','orange']);

  return (

    <div className="container">
    <ul id="fruits">
      {fruits.sort().map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    <br/>
    <p><input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} /></p>
    <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
  </div>
 );
}

export default Fruits;