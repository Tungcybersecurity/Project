import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";

function Header2(){
    return(
        <div>
            <div className="form-container-header">
                <div className="navbar">
                    <Link className="logo" to="/"><b>HugoBus</b></Link>
                        <ul className="link">
                            <li><Link to="/">Về chúng tôi</Link></li>
                            <li><Link to="/contracts">Hợp đồng</Link></li>
                            <li><Link to="/list-son">Thông tin con</Link></li>
                            <li><Link to="/guidelines">Hướng dẫn</Link></li>
                            <li><Link to="/PersonalInformation">Thông tin cá nhân</Link></li>
                        </ul>
                    <Link className="login" to="/logout"><b>Đăng xuất</b></Link>
                    </div>
                </div>
                </div>
        
    );
}

export default Header2;
