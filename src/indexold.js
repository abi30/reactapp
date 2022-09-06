import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import './index.css';



// function TemporaryName() {
//   return (<div>
//     <header className="header">

//       <nav className="nav">
//         <img src={logo} className="App-logo" alt="logo" width="60px" />

//       </nav>

//     </header>

//     <h1>Reasons I'm excited to learn React</h1>

//     <ol>
//       <li> It's composable</li>
//       <li> It's declarative</li>
//       <li> It's a hireable skill</li>
//       <li> It's actively maintained my skilled people.Powers thousands of enterprise apps, including mobile apps</li>
//     </ol>

//     <footer className="footer">
//     <small> &#169; Abdullla al Rakib.All rights reserved.</small>
//     </footer>
//   </div>);
// }


// document.getElementById('root').append(JSON.stringify(page));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <TemporaryName />
  <App />
);


