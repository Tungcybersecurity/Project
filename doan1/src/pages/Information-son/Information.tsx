import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../Images';
import "./Information.scss"
import giaodien4 from "../../Images/meme-meo-cute-5.png";


function InformationSon() {
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
        </div>
          </div>
        </div>
        <div className='tkb'> Thời khóa biểu 
        <table style={{width:"100%",marginTop:"10px"}}>
  <tr>
    <th></th>
    <th>Thứ 2</th> 
    <th>Thứ 3</th>
    <th>Thứ 4</th>
    <th>Thứ 5</th>
    <th>Thứ 6</th>
    <th>Thứ 7</th>
  </tr>
  <tr>
    <td>Sáng</td>
    <td>8:00</td>
    <td style={{backgroundColor:"green"}}>7:00</td>
    <td>10:00</td>
    <td>14h:00</td>
    <td style={{backgroundColor:"green"}}>24h:00</td>
    <td>13:00</td>
    
  </tr>
  <tr>
    <td>Chiều</td>
    <td style={{backgroundColor:"green"}}>5:00</td>
    <td>7:00</td>
    <td style={{backgroundColor:"green"}}>20:00</td>
    <td style={{backgroundColor:"green"}}>14h:00</td>
    <td>8h:00</td>
    <td>15:00</td>
  </tr>
</table>
<div>
    <h3>Chú thích</h3>
    <div style={{display:"flex"}}>
    <div style={{backgroundColor:"green"}} className='chuthich'></div>
    <div style={{width:"130px",marginTop:"10px"}}>ngày đăng ký</div>
    </div>
    <div style={{display:"flex"}}>
    <div style={{backgroundColor:"white"}} className='chuthich'></div>
    <div style={{width:"190px",marginTop:"10px"}}>ngày không đăng ký</div>
    </div>
    <button className='btn'>Lưu</button>

</div>

        </div>
      
    </div>
  );
}

export default InformationSon;
