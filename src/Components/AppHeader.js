import React from 'react';
import { Link} from "react-scroll";

import Darkmode from 'darkmode-js';

const AppHeader = () => {
    

    const options = {
        bottom: '30px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '120px', // default: 'unset'
        time: '0.3s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌙', // default: ''
        autoMatchOsTheme: true // default: true
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    return (
        <div className="header">
            <div className="header-body">

                <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" htmlFor="menu-open">
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </label>

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="menu-item purple"
                    ><i className="fa fa-user"></i></Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="menu-item orange"
                    ><i className="fa fa-briefcase"></i></Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="menu-item lightblue"
                    ><i className="fa fa-at"></i></Link>

                </nav>
                
            </div>
        </div>
    );
}

export default AppHeader;