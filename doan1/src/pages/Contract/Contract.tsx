import React from 'react';
import { Link } from 'react-router-dom';
import "./Contract.scss"
import images from "../../Images";
import h2 from "../../Images/h2.png"; // Import hình ảnh
import h4 from "../../Images/h4.png";
import icon1 from "../../Images/together.png";



function Contract() {
  return (
    <div className='ontract'>
        <div style={{backgroundImage: `url(${icon1})` }} className='form-contract'>
            <label style={{marginTop:"50px"}} className='label1' htmlFor="sec">Tên học sinh</label>
            <select className='sl' id='sec'>
              <option value="value1">Nguễn Huy Tùng</option>
              <option value="value2">Lê Quang Vinh</option>
              <option value="value3">Võ văn tuấn</option>
            </select>
            <label className='label1' htmlFor="">Địa điểm đón</label>
            <input className='input1' type="text" />
            <label className='label1' htmlFor="">Địa điểm đến</label>
            <input className='input1' type="text" />
            <h3 style={{marginTop:"20px"}}>Chọn gói đăng ký</h3>
            <form style={{width:"200px"}} action="/action_page.php">
           <input className='goi' type="radio" id="goi1" name="fav_language" value="2000" />
           <label htmlFor="goi1">Gói 1 tháng 2000$</label><br />
           <input className='goi' type="radio" id="goi2" name="fav_language" value="2000" />
           <label htmlFor="goi2">Gói 2 tháng 2000$</label><br />
           <input className='goi' type="radio" id="goi3" name="fav_language" value="11999" />
           <label htmlFor="goi3">Gói 3 tháng 11999$</label><br /><br />
           <input className='dky' type="submit" value="Đăng ký" />
           <div style={{width:"200px" , border:"2px solid black",marginTop:"10px",padding:"5px",borderRadius:"30px",marginLeft:"30px"}}><Link style={{color:"black"}} to="/contract-status">Trình trạng hợp đồng</Link></div>
           </form> 
        </div>

    </div>
    
  );
}

export default Contract;