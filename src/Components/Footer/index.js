import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

footer.propTypes = {

};

function footer(props) {
    return (
        <div id="footer" className="footer-section">
            <div className="footer-section__top">
                <div className="footer-section__top--content">
                    <Menu className="d-flex justify-content-between" mode="horizontal">
                        <Menu.Item>
                            <a href="#">Chính sách bảo mật</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#">Quy chế hoạt động</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#">Chính sách vân chuyển</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#">Chính sách trả hàng và hoàn tiền</a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="footer-section__top--logo">

                </div>
                <div className="footer-section__top--desc">
                    <p>Địa chỉ: 475A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành Phố Hồ Chí Minh.</p>
                    <p>Tổng Đài Hộ Trợ: 0972887876</p>
                    <p>Email: cartya@gmail.com</p>
                </div>
            </div>

            <div className="footer-section__bottom">
                <p>© 2021 Cartya. Tất cả các quyền được bảo lưu.</p>
            </div>
        </div >
    );
}

export default footer;