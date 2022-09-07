import React, { useState, useEffect } from 'react';
import axios from 'axios';


function KontaktdatenComponent() {

  const [data, setData] = useState('');
 
  
  useEffect(() => {
    fetchDataByAxios();
  },[]);

  let access_token ='Bearer lRsbmPsO9rSbubQcYddgtEc---iYxZo-suJdWah_RgE.w0zklauZBj9Y1BavoObYNYGHXSfjvTXzsj5vTNE4yUA';

  const fetchDataByAxios = async () => {
    let response = await axios({
      mehtod: 'get',
      url: '/5004333890/kontaktdaten',
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


  // 'Content-Type': 'application/json',
  // baseURL: 'https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X/kunden'

  return (
    <div>
    
      <div>
        {
          data ? (
            
            data.map((data) => {
              return (

                <div key={data.Id} className="container d-flex justify-content-center align-items-center">

                  <div className="card">

                    <div className="upper">

                      <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />

                    </div>

                    <div className="user text-center">

                      <div className="profile">

                        <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80" />

                      </div>

                    </div>


                    

                  </div>

                </div>

              )})
            ) : (<h3>No data yet</h3>)
        }
      </div>


    </div>

  );
}
export default KontaktdatenComponent;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS

{/* <div className="mt-5 text-center">

<h4 className="mb-0">{data1.Person.Vorname} {data1.Person.Nachname}</h4>
<span className="text-muted d-block mb-2">Los Angles</span>

<button className="btn btn-primary btn-sm follow">Follow</button>


<div className="d-flex justify-content-between align-items-center mt-4 px-4">

  <div className="stats">
    <h6 className="mb-0">Followers</h6>
    <span>8,797</span>

  </div>


  <div className="stats">
    <h6 className="mb-0">Projects</h6>
    <span>142</span>

  </div>


  <div className="stats">
    <h6 className="mb-0">Ranks</h6>
    <span>129</span>

  </div>

</div>

</div> */}