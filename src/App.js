import React from 'react';
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Tags from './components/tags/Tags';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Tags/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos/:videoId" element ={<Video/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
