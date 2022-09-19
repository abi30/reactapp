import React, { useState, useEffect } from 'react';
// import KundeComponent from './Components/KundeComponent.js';
// import AdressenComponent from './Components/AdressenComponent.js';
// import KontaktdatenComponent from './Components/KontaktdatenComponent.js';
import axios from 'axios';
import './App.css';
import './index.css';


function App() {

  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  
  useEffect(() => {
    fetchDataByAxios1();
    fetchDataByAxios2();
    fetchDataByAxios3();
  },[]);

  let access_token ='Bearer lRsbmPsO9rSbubQcYddgtEc---iYxZo-suJdWah_RgE.w0zklauZBj9Y1BavoObYNYGHXSfjvTXzsj5vTNE4yUA';

  const fetchDataByAxios1 = async () => {
    let response = await axios({
      mehtod: 'get',
      url: '/5004333890',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': access_token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },

    }).then((response) => {
      const allData = response.data;
      setData1(allData);
      console.log(allData);
    }).catch(error => console.error(`Error:${error}`));
    console.log(window.location.href)
  };



  const fetchDataByAxios2 = async () => {
    let response = await axios({
      mehtod: 'get',
      url: '/5004333890/kontaktdaten',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': access_token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },

    }).then((response) => {
      const allData3 = response.data;
      setData3(allData3);
      console.log(allData3);
    }).catch(error => console.error(`Error:${error}`));
    console.log(window.location.href)
  };
  const fetchDataByAxios3 = async () => {
    let response = await axios({
      mehtod: 'get',
      url: '/5004333890/adressen',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': access_token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },

    }).then((response) => {
      const allData3 = response.data;
      setData3(allData3);
      console.log(allData3);
    }).catch(error => console.error(`Error:${error}`));
    console.log(window.location.href)
  };



  var currentDate = new Date();
console.log(currentDate);
var month = currentDate.getMonth()+1;
if (month < 10) month = "0" + month;
var dateOfMonth = currentDate.getDate();
if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
var year = currentDate.getFullYear();
var formattedDate = dateOfMonth + "/" + month + "/" + year;
console.log(formattedDate);
  
  // 'Content-Type': 'application/json',
  // baseURL: 'https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X/kunden'

  return (
    <div>
     
      {/* <KundeComponent/> */}
      {/* <AdressenComponent /> */}
      {/* <KontaktdatenComponent/> */}
  
      
    </div>

  );
}
export default App;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

