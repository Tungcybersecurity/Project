import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../component/Header/Header";
import Content from "../../component/Content/Content";
import Login from "../Login/Login";
import Register from "../Register/Register";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/" element={<Content/>} />
      <Route path="/" element={<Content/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
  );
};  
export default Routers;