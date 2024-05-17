import React from "react";
import "./Content.scss";
import { Link } from "react-router-dom";
import images from "../../Images";
import h2 from "../../Images/h2.png"; // Import hình ảnh
import h4 from "../../Images/h4.png";
import icon1 from "../../Images/icon.png";

const Content = () => {
    return (
        <div>
            <div className="form-container-content">
                <div className="ct-1">
                    <div style={{ width: "400px", height: "250px" }} className="h-1">
                        <h5 style={{ marginLeft: "70px", fontSize: "20px", fontStyle: "italic"}}><b>HugoBus</b></h5>
                        <h5 style={{ marginLeft: "70px" }}>Ứng dụng giao thông dành cho <br />
                            học sinh tại Việt Nam.</h5>
                        <h5 style={{ marginLeft: "70px" }}>Đã có mặt và ra mắt lần đầu tiên <br />
                            tại thành phố Hồ Chí Minh.</h5>
                        <img className="img-icon" src={icon1} alt="" />
                    </div>
                    <div style={{ width: "400px", height: "250px", backgroundImage: `url(${h2})` }} className="h-2"></div> {/* Sử dụng hình ảnh trong backgroundImage */}
                </div>
                <div className="ct-2">
                    <div style={{ width: "400px", height: "300px", backgroundColor: "white" }} className="h-3">
                        <h5 style={{ marginLeft: "70px", fontSize: "20px", fontStyle: "italic", textTransform: "lowercase" }}>HugoBus giúp các bạn sử dụng <br />
                        phương tiện đi học cho 1 cách nhanh chóng</h5>
                        <h5 style={{ marginLeft: "70px" }}>Thông qua các tính năng tìm đường📝tra cứu <br />thông tin giờ đi🕐xem thời gian đưa đón di🚌 <br />chuyển đa phương thức và👍đánh giá chất<br />lượng.</h5>
                        
                        <img style={{ marginLeft: "100px" }} src="" alt="" />
                    </div>
                    <div style={{ width: "500px", height: "300px", backgroundImage: `url(${h4})` }} className="h-4"></div> {/* Sử dụng hình ảnh trong backgroundImage */}
                </div>
                <div className="form-bottom"></div>

            </div>
        </div>
    );
}

export default Content;
