import React, { useState, useEffect } from 'react';
import AdressenComponent from './Components/AdressenComponent.js';
import KundeComponent from './Components/KundeComponent.js';
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



  const fetchDataByAxios3 = async () => {
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
      <KundeComponent/>
      <AdressenComponent />
      <div>
        {
          data1 ? (
            
            // data.map((data) => {
              // return ()});

    
         <div key={data1.Id} className="row contacts">
            <div id="client-details" className="col-md invoice-to vcard">
               <p className="to">
                     <strong>&nbsp;Herr&nbsp;{data1.Person.Vorname} &nbsp; {data1.Person.Nachname}</strong>
               </p>

            </div>

          

            <div id="invoice-info" className="col-md invoice-details">
               <h5>{formattedDate}</h5>
            </div>
         </div>





                // <div key={data1.Id} className="container d-flex justify-content-center align-items-center">

                //   <div className="card">

                //     <div className="upper">

                //       <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />

                //     </div>

                //     <div className="user text-center">

                //       <div className="profile">

                //         <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80" />

                //       </div>

                //     </div>


                //     <div className="mt-5 text-center">

                //       <h4 className="mb-0">{data1.Person.Vorname} {data1.Person.Nachname}</h4>
                //       <span className="text-muted d-block mb-2">Los Angles</span>

                //       <button className="btn btn-primary btn-sm follow">Follow</button>


                //       <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                //         <div className="stats">
                //           <h6 className="mb-0">Followers</h6>
                //           <span>8,797</span>

                //         </div>


                //         <div className="stats">
                //           <h6 className="mb-0">Projects</h6>
                //           <span>142</span>

                //         </div>


                //         <div className="stats">
                //           <h6 className="mb-0">Ranks</h6>
                //           <span>129</span>

                //         </div>

                //       </div>

                //     </div>

                //   </div>

                // </div>

            ) : (<h3>No data yet</h3>)
        }
      </div>


    </div>

  );
}
export default App;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

