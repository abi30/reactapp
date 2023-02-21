// select dom elements

//  const counterEl = document.getElementById("counter");
//  const incrementEl = document.getElementById("increment");
//  const decrementEl = document.getElementById("decrement");
 const addmatchbtn = document.querySelector("button.btn:first-of-type");
 
// addmatchbtn.addEventListener('click', addMatch1);

const addmatchContainer = document.querySelector("div.all-matches");
  let matchCount = 1;
  function addMatch212() {
    matchCount++;
  
    // Create a new form element for each match
    matchForm= `<h1> hello 21 </h1>`;
    
    // Add the form element to the container
    addmatchContainer.appendChild(matchForm);
  }

  function addMatch1() {
    matchCount++;
  
    const matchForm = document.createElement('div');
    matchForm.className = 'match';
    matchForm.innerHTML = `
          <div class="wrapper">
            <button class="lws-delete">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match ${matchCount}</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" name="increment${matchCount}" class="lws-increment" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" name="decrement${matchCount}" class="lws-decrement" />
            </form>
          </div>
          <div class="numbers">
            <h2 class="lws-singleResult">0</h2>
          </div>
  </div>`;  // <-- add closing </form> tag here
  
  addmatchContainer.appendChild(matchForm);
  }






const incrementForms = document.querySelectorAll(".incrementForm");
const decrementForms = document.querySelectorAll(".decrementForm");
const singleResults = document.querySelectorAll(".lws-singleResult");
const resetEl = document.querySelector(".lws-reset");


const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_MATCH = "add_match";
const RESET = "reset";
//actions creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const addMatch = () => {
  return {
    type: ADD_MATCH
  }
  };
const reset = () => {
  return {
    type: RESET
  }
  };

  const addItem = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item
    };
  };
  // { id: 1, defValue: 0 };


// initial state
const initialState = {value:0};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    if(action.payload){
      console.log(initialState);
      console.log(action.payload);
        return {
          ...state,
          value: state.value + action.payload,
        };
    }else{
        return state;
    }
  
  } else if (action.type === "decrement") {
    if(action.payload) {     
        return {
          ...state,
          value: state.value > 0 && state.value >= action.payload ? state.value  - action.payload : 0,
        };
    }else{
        return state;
    }
  } else if (action.type === "reset") {
      return {
        
        ...state,
        value: 0
      };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  console.log(state);
  singleResults.forEach((result) => {
    // state.forEach((match) => {
      // console.log(match);
      result.innerText = state.value;
    // });
    // result.innerText = state.value.toString();
    console.log(`Form submitted decrement: ${result}`);
  });
};

// update UI initially
render();
// render(store.getState().matches);

store.subscribe(render);
// store.subscribe(() => {
//   const state = store.getState()
//   render(state.matches)
// })



let incrementId =1;
incrementForms.forEach((form) => {
  incrementId++;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const incrementInput = form.querySelector('input[name="increment"]').value;
       console.log(typeof incrementInput);
      store.dispatch(increment(parseInt(incrementInput)));
      console.log(`Form submitted increment: ${incrementInput}`);
    });
  });
decrementForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const decrementInput = form.querySelector('input[name="decrement"]').value;
          console.log(decrementInput);
          store.dispatch(decrement(parseInt(decrementInput)));
          console.log(`Form submitted decrement: ${decrementInput}`);
    });
  });


// button click listeners for add match
addmatchbtn.addEventListener("click", () => addMatch1());
// button click listeners
// incrementEl.addEventListener("click", () => {
//   store.dispatch(increment(2));
// });
resetEl.addEventListener("click", () => {
  store.dispatch(reset());
});



// decrementEl.addEventListener("click", () => {
//   store.dispatch(decrement(1));
// });
