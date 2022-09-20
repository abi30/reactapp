import React from 'react';
import Increment from './Components/Increment';
import Fruits from './Components/Fruits';
import HelloComponent from './Components/HelloComponent';
import './App.css';
import './index.css';
import ListExampleIconShorthand from './Components/ListExampleIconShorthand'


function App() {
 

 const number =[10,20,21,34,40];
  const names = ["Tamim","Riad","Musfiq","Rakib"];
  const newArray2 = names.map((name)=>{
    return name.toUpperCase();
  }); 
  console.log(newArray2);
   
   const object = [
    {name:"Humayon Ahmed",availableBooks:30},
    {name:"Jafar Iqbal",availableBooks:30},
    {name:"Ahmed sofa",availableBooks:40},
    {name:"Freelancer Omuk",availableBooks:10}
];
   
   const newNumber = number.map((currentValue,index,arr)=>{
     console.log(index);
    console.log(currentValue);
    console.log(arr);
   });
   
   
   
  return (
    <div>
      hello
     <Increment/>
     <hr />
     <Fruits/>
     <hr />
     <HelloComponent/>
     <ListExampleIconShorthand/>
    </div>
  );
}
export default App;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

// https://react-bootstrap.github.io/components/cards/
// https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-react-bootstrap
// https://create-react-app.dev/docs/adding-bootstrap/