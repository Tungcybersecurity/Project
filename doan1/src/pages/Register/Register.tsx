import React from 'react';
 import "./Register.scss"
import { Link } from 'react-router-dom';
import "../../Images/atnight.png"
import giaodien3 from "../../Images/atnight.png";
function Register() {
  return (
    <div className="wrapper">
      <div style={{backgroundImage: `url(${giaodien3})`,width:"100%",height:"120vh",backgroundSize: "cover",}} className="form-dk">
      <form action="" id="form-login">
        <h1 className="form-heading">đăng ký</h1>
        <div className="form-group-1">
          <label style={{width:"160px",marginTop:"10px"}} htmlFor="">Tài khoản:</label>     
          <input type="text"  className="form-input" placeholder="Tên đăng nhập" />
        </div>
        <div className="form-group-2">
        <label style={{width:"160px",marginTop:"10px"}} htmlFor="">Mật khẩu:</label> 

         <input  type="password" className="form-input" placeholder="Mật khẩu" />
        </div>
        <div className="form-group-2">
        <label style={{width:"160px",marginTop:"10px"}} htmlFor="">Email:</label> 

         <input  type="email" className="form-input" placeholder="Email" />
        </div>
        <div className="form-group-2">
        <label style={{width:"160px",marginTop:"10px"}} htmlFor="">SĐT:</label> 

         <input  type="text" className="form-input" placeholder="Số điện thoại" />
        </div>
        <div className='form-input'>
        <input style={{width:"150px"}}  type="submit" value="Đăng ký" className="form-submit" />
        </div>
      </form>
      </div>
    </div>
  );
}

export default Register;
