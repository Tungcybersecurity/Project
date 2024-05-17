import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../Images';
import giaodien4 from "../../Images/meme-meo-cute-5.png";
import "./Update-son.scss"


function UpdateSon() {
  return (
    <div className="info">
        <div className='info-son'>
           <div className='form-left'>
        <div className='left'>
            <h3 style={{marginTop:"15px"}}>Thông tin cá nhân</h3>
            <img className='avatar2' src={giaodien4} alt="" />
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='link-info'><Link style={{ textDecoration: 'none' , color:"white"}}  to="/update-son">Cập nhật hình ảnh</Link></div>
        </div>
          </div>
          <div className='form-right'>
          <div className='right'>
            <label htmlFor="ho">Họ</label>
            <input id='ho' type="text" />
            <label htmlFor="enum">Gioi Tính</label>
            <input id='enum' type="text" />
            <label htmlFor="class">Lớp</label>
            <input id='class' type="text" />
        </div>
        <div className='right2'>
            <label htmlFor="name">Tên</label>
            <input id='name' type="text" />
            <label htmlFor="">Ngày sinh</label>
            <input id='birth'type="date" />
            <label htmlFor="schools">Trường</label>
            <input id='schools' type="text" />
            <button className='btn2'>Lưu</button>
        </div>
          </div>
          
        
 

</div>

        </div>
  );
}

export default UpdateSon;
