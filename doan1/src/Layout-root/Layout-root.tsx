
import React from "react";
import "./Layout-root.scss"
import Header from "../component/Header/Header";
import Content from "../component/Content/Content";
import { Router } from "react-router-dom";
import Routers from "../pages/router/router";
import Footer from "../component/Footer/Footer";

const LayoutRoot = () => {
    return (
      <div className="root">
        <div className="header">
        <Header/>
        </div>
        <div className="content">
        <Routers/>
        </div>
        <div className="footer">
        <Footer/>
        </div>

      </div>
    );
  };
  
  export default LayoutRoot;