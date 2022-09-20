import React,{useState,useEffect} from 'react'
import { Button } from "react-bootstrap";

function Fruits() {
    const [fruit, setFruit] = React.useState('');
    const [fruits, setFruits] = React.useState(['apple','mango','guava','orange']);

  return (
    <div className="container">
        <ul id = "fruits">
        {
            fruits.sort().map((fruit,index) => (
                <li key ={index}>{fruit} </li>
            ))}
        </ul>
        <br/>
        <p><input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} /> </p>
        <Button  onClick={() => setFruits([...fruits,fruit])}>
           Add Fruit
        </Button>
  </div>
 );
}

export default Fruits;