import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function AdressenComponent() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchDataByAxios();
  }, []);

  let access_token =
    "Bearer e-nfkLZhsGau32fvRTsYvb7z5tgR8BljEqlDl6Y_kS4.Rjmt-iw_pg_KRJE4Ckc0Tji4Mp4cF2GxrN3DUdjFlLg";

  const fetchDataByAxios = async () => {
    let response = await axios({
      mehtod: "GET",
      url: "kunden/5004333890/vertraege",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: access_token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        console.log(response);
        const onlyData = response.data;
        setData(onlyData);
        console.log(onlyData);
      })
      .catch((error) => {
        console.error(`Error:${error}`);
      });
    console.log(window.location.href);
  };

  // 'Content-Type': 'application/json',
  // baseURL: 'https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X/kunden'

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-1 own_contianer p-2">
        {data ? (
          data.map((data) => {
            return (
              <Card key={data.Id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>
                    Gesellschaft ID: {data.Gesellschaft}
                  </Card.Title>
                  <Card.Text>Risiko: {data.Risiko}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            );
          })
        ) : (
          <Card key={data.Id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>No data available</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        )}
      </div>
    </div>
  );
}

export default AdressenComponent;

// Multiple Ways of Async Await Fetch API Call With Hooks (useState, useEffect) & Map | React JS
