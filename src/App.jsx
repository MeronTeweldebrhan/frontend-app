// import { useState } from 'react'

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import PostPage from "./Pages/PostPage";
import Navbar from "./components/Navbar";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/posts" element={<PostPage/>} />
      </Routes>
      
    </>
  );
}

export default App;
