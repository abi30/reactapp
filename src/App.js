import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Badge} from "react-bootstrap";
import { Card} from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import AdressenComponent from './Components/AdressenComponent.js';
import KundeComponent from './Components/KundeComponent.js';
import KontaktdatenComponent from './Components/KontaktdatenComponent.js';
import AllcontractsComponent from "./Components/AllcontractsComponent.js";
import './App.css';
import './index.css';


function App() {

  const [data, setData] = useState('');
 
  
  useEffect(() => {
    fetchData();
  },[]);

//   let access_token ='Bearer lRsbmPsO9rSbubQcYddgtEc---iYxZo-suJdWah_RgE.w0zklauZBj9Y1BavoObYNYGHXSfjvTXzsj5vTNE4yUA';

  const fetchData = async () => {
    let response = await axios({
      mehtod: "get",
      url: "https://api.publicapis.org/entries",
    })
      .then((response) => {
        const allData = response.data;
        setData(allData);
        console.log(data);
        console.log(allData);
      })
      .catch((error) => console.error(`Error:${error}`));
    console.log(window.location.href)
  };


  return (
    <div>
      <KundeComponent />
      <AdressenComponent />
      <KontaktdatenComponent />
      <AllcontractsComponent />
    </div>
  );
}
export default App;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

// https://react-bootstrap.github.io/components/cards/
// https://bobbyhadz.com/blog/react-module-not-found-cant-resolve-react-bootstrap
// https://create-react-app.dev/docs/adding-bootstrap/