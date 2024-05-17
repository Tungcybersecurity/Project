import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../Images';
import giaodien4 from "../../Images/meme-meo-cute-5.png";
import giaodien5 from "../../Images/atnight.png";
import "./ListSon.scss"



function listSon() {
  return (
    <div className="list-son">
      <div style={{width:"100%",height:"120vh",backgroundImage: `url(${giaodien5})`,backgroundSize:"100% 100%"}} className='map-list'>
      <div className='ds-son'>
      <button style={{width:"30px",height:"30px",marginTop:"250px"}}>←</button>
            <div className='form-son'>
               <img className='avatar' src={giaodien4} alt="" /> 
               <div className='name'>Nguyễn Huy tùng</div>
               <button className='button-son'>Xem</button>
            </div>
            <div className='form-son'>
               <img  className='avatar' src={giaodien4} alt="" /> 
               <div className='name'>Nguyễn Huy tùng</div>
               <button className='button-son'>Xem</button>
            </div>
            <div className='form-son'>
               <img  className='avatar' src={giaodien4} alt="" /> 
               <div className='name'>Nguyễn Huy tùng</div>
               <button className='button-son'>Xem</button>
            </div>
            <button style={{width:"30px",height:"30px",marginTop:"250px",marginLeft:"100px"}}>→</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='click-add-son'><Link style={{ textDecoration: 'none' , color:"black"}} 
        to="/information-son" >Thêm</Link></div>

        
        </div>
      
    </div>
  );
}

export default listSon;
