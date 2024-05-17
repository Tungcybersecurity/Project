import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../component/Header/Header";
import Content from "../../component/Content/Content";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ListSon from "../ListSon/ListSon";
import InformationSon from "../Information-son/Information";
import UpdateSon from "../update-son/Update-son";
import Contract from "../Contract/Contract";
import ContractStatus from "../Contract/ContractStatus";


const Routers2 = () => {
  return (
    <Routes>
      <Route path="/update-son" element={<UpdateSon/>} />
      <Route path="/information-son" element={<InformationSon/>} />
      <Route path="/list-son" element={<ListSon/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contracts" element={<Contract/>} />
      <Route path="/" element={<Content/>} />
      <Route path="/" element={<Content/>} />
      <Route path="/contract-status" element={<ContractStatus/>} />
    </Routes>
  );
};  
export default Routers2;