// import React from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className=" text-center mx-auto">
             <img className="pt-6 mx-auto" src={logo} alt="" />
             <p className="text-2xl mt-3 my-3">Get the latest News Today, Tomorrow , Everyday! with Dragon News! </p>
             <p className=" text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;