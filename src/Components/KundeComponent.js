import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KundeComponent() {

  const [data, setData] = useState([]);
      useEffect(() => {
     fetchDataByAxios();
  },[]);

  let access_token ='Bearer A2f8snrawRhyNMfcTi0A05QMA9zGqVUaOQ7FB2MYh40.R2A5QwVYA2JuKd-NMdZIdwEqvpnHcB4biamyIjnDQVE';

  const fetchDataByAxios = async () => {
    
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
      setData(allData);
      console.log(allData);
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
        {/* {
          data ? (
            
            // data.map((data) => {
              // return ()});
          <div key={data.Id} className="row contacts">
            <div id="client-details" className="col-md invoice-to vcard">
               <p className="to">
                     <strong>&nbsp;Herr&nbsp;{data.Person.Vorname} &nbsp; {data.Person.Nachname}</strong>
               </p>

            </div>

            <div id="invoice-info" className="col-md invoice-details">
               <h5>{formattedDate}</h5>
            </div>
         </div>

        ) : (<h3>No data yet</h3>)
    } */}
      </div>

  );
}
export default KundeComponent;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

