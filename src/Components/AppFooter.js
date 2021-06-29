import React from 'react';
import { BackTop } from 'antd';

const AppFooter = () => {

    return(
        <div className="footer">
            <ul className="socials">
                <li><a href="https://www.linkedin.com/in/shrey-malhan/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Shreymalhan" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://twitter.com/MalhanShrey" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/s_malhan/" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <div className="copyright">Copyright &copy; 2021 Shrey Malhan</div>
            <BackTop>
                <div className="goTop">&uarr;</div>
            </BackTop>
        </div>
    );
}

export default AppFooter;