import React from 'react';
import { Link } from 'react-router-dom';
import "./ContractStatus.scss"
import images from "../../Images";
import h2 from "../../Images/h2.png"; // Import hình ảnh
import h4 from "../../Images/h4.png";
import icon1 from "../../Images/together.png";



function ContractStatus() {
  return (
    <div className='contract-status'>
        <div className='form-contract-status'>
            <h3>Trình trạng hợp đồng</h3>
            <div className='nd'>
                <h4 style={{fontSize:"20px"}}>Hợp đồng 1</h4>
                <h4>Tên con: Nguyễn Huy Tùng</h4>
                <h4>Ngày ký hợp đồng: 1/1/2024</h4>
                <h4>Gía hợp đồng: 100$</h4>
                <h4>Ngày thanh toán : 2/1/2024</h4>
                <h4>Lớp: A</h4>
                <h4>Trường: ABC</h4>
                <h4>Trình trạng:<span style={{color:"green"}}>Còn hạn</span></h4>
            </div>
            <div className='nd'>
                <h4 style={{fontSize:"20px"}}>Hợp đồng 2</h4>
                <h4>Tên con: Võ Văn Tuấn</h4>
                <h4>Ngày ký hợp đồng: 1/1/2024</h4>
                <h4>Gía hợp đồng: 200$</h4>
                <h4>Ngày thanh toán: 2/1/2024</h4>
                <h4>Lớp: A</h4>
                <h4>Trường: ABC</h4>
                <h4>Trình trạng :<span style={{color:"red"}}>Hết hạn</span></h4>
            </div>
            <button>pre</button>
            <button style={{marginLeft:"10px"}}>next</button>
        </div>
    </div>
    
  );
}

export default ContractStatus;