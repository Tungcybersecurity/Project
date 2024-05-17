import React from 'react';
 import "./Login.scss"
import { Link } from 'react-router-dom';
import giaodienlogin from "../../Images/giaodien.png";
import "../../Images/giaodien.png"
import giaodien3 from "../../Images/together.png";



function LoginForm() {
  return (
    <div className="wrapper">
      <div style={{backgroundImage: `url(${giaodienlogin})`,width:"100%",height:"120vh"}} className='from-all'>
      <form action="" id="form-login">
        <h1 className="form-heading">đăng nhập</h1>
        <div className="form-group-1">
          <label style={{width:"160px",marginTop:"10px"}} htmlFor="username">Tài khoản:</label>     
          <input id='username' type="text" className="form-input" placeholder="Tên đăng nhập" />
        </div>
        <div className="form-group-2">
          <label style={{width:"160px",marginTop:"10px"}} htmlFor="password">Mật khẩu:</label> 
          <input id='password' type="password" className="form-input" placeholder="Mật khẩu" />
        </div>
        <div className='form-input'>
        <button style={{padding:"5px",backgroundColor:" #007bff",color:"white",borderRadius:"10px"}}>Đăng nhập</button>
        <Link style={{border:"2px solid black",padding:"5px",backgroundColor:" #007bff",color:"white",borderRadius:"10px",textDecoration:"none"}} to="/register">Đăng ký</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default LoginForm;
