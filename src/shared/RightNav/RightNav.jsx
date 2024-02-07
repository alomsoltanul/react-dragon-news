// import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"
const RightNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className=" text-3xl">Login With</h2>
                <button className="btn btn-outline btn-primary w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline btn-secondary w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
                <button className="btn btn-outline btn-success w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
            </div>
            {/* Follow */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className=" text-3xl">Follow Us On</h2>
               <a href="" className="flex p-4  text-lg items-center border rounded-t-lg ">
                    <FaFacebook className="mr-2 "></FaFacebook>
                    Facebook
               </a>
               <a href="" className="flex p-4  text-lg items-center border rounded-t-lg ">
                    <FaTwitter className="mr-2 "></FaTwitter>
                    X
               </a>
               <a href="" className="flex p-4  text-lg items-center border rounded-t-lg ">
                    <FaInstagram className="mr-2 "></FaInstagram>
                    Instagram
               </a>
            </div>
            {/* QZone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className=" text-3xl">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
             
        </div>
    );
};

export default RightNav;