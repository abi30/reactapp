import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdressenComponent() {

    const [data, setData] = useState('');

    useEffect(() => {
        fetchDataByAxios();
    }, []);

    let access_token = 'Bearer A2f8snrawRhyNMfcTi0A05QMA9zGqVUaOQ7FB2MYh40.R2A5QwVYA2JuKd-NMdZIdwEqvpnHcB4biamyIjnDQVE';

    const fetchDataByAxios = async () => {
        let response = await axios({
            mehtod: 'get',
            url: '/5004333890/adressen',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': access_token,
                'Content-Type': 'application/x-www-form-urlencoded',
            },

        }).then((response) => {
            console.log(response);
            const allData = response.data;
            setData(allData);
        }).catch(error => console.error(`Error:${error}`));
        console.log(window.location.href)
    };



    // 'Content-Type': 'application/json',
    // baseURL: 'https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X/kunden'

    return (

        <div>


            <div className="row row-cols-1 row-cols-md-2 g-1 own_contianer p-2">
                {
                    data ? (
                        data.map((data) => {
                            return (

                                <div key={data.Id} className="card  m-1 border-info adrInfo cardbodykon" style={{ maxWidth: '18rem'}}>
                                    <div className="card-header font-weight-bold" style={{textTransform: 'uppercase', fontSize : '13px', paddingBottom:'2px', borderBottom : '0px'}}><b>&nbsp;{data.Typ}</b>
                                    </div>

                                    <div className="card-body text-dark">
                                        <h5 className="card-title">{data.Strasse}</h5>
                                    </div>

                                    <div className="card-footer" style={{backgroundColor:'transparent', borderTop : '0px'}}>
                                        <p  className="card-text"><span className="region">{data.Postleitzahl}&nbsp;{data.Ort}</span></p>
                                    </div>
                                </div>

                            )
                        })

                    ) : (<div key={data.Id} className="card  m-1 border-info adrInfo cardbodykon" style={{maxWidth: '18rem'}}>
                        <div className="card-header font-weight-bold" style={{textTransform: 'uppercase',fonSize : '13px',paddingBottom:'2px', borderBottom : '0px'}}><b>&nbsp;no Data</b>
                        </div>

                        <div className="card-body text-dark">
                            <h5 className="card-title">no Data</h5>
                        </div>

                        <div className="card-footer" style={{backgroundColor:'transparent',borderTop : '0px'}}>
                            <p className="card-text"><span className="region">no Data </span></p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}
export default AdressenComponent;



// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS


            