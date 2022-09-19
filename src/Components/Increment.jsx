import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Increment() {
  const [counter, setCounter] = React.useState(0);
  console.log(counter);
  console.log(setCounter);

  return (
    <div>
    <ul id = "fruits">
    </ul>
      <h1 id="display">{counter}</h1>
      <div>
        <Button id="button" onClick={()=>setCounter(counter + 1)}>
          counter + 1
        </Button>
      </div>
    </div>
  );
}

export default Increment;
