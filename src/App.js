import React from 'react';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from './components/navbar/Navbar';
import '../src/assets/main.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs/:blogId" element ={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
