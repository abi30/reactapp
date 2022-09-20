import React,{useState} from 'react'


function HelloComponent() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState('world');

    function handleClick(){
        setCount(count+1);
    }
    function handleInput (e){
        setName(e.target.value);
    }
  return (
    <div className="App">
        <h1> hello {name}</h1>
        <input value={name} onInput={handleInput} />
        <button onClick={handleClick} >
            Clicks {count}
        </button>


    </div>
  )
}

export default HelloComponent;