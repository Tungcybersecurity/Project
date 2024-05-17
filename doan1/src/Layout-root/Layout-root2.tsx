
import React from "react";
import "./Layout-root.scss"
import Header from "../component/Header/Header";
import Content from "../component/Content/Content";
import { Router } from "react-router-dom";
import Routers from "../pages/router/router";
import Footer from "../component/Footer/Footer";
import Header2 from "../component/Header/Header2";
import Routers2 from "../pages/router/router2";

const LayoutRoot2 = () => {
    return (
      <div className="root">
        <div className="header">
        <Header2/>
        </div>
        <div className="content">
        <Routers2/>
        </div>
        <div className="footer">
        <Footer/>
        </div>

      </div>
    );
  };
  
  export default LayoutRoot2;