// import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div>
            <div className="flex">
                <button className="btn btn-secondary"> Breaking News </button>
                <Marquee speed={100} >
                    <Link className="mr-12 text-xs" to="facebook.com/zarafmehedi">View the Profile of a great future developer</Link>
                    <Link className="mr-12 text-xs" to="facebook.com/zarafmehedi">View the Profile of a great future developer</Link>
                    <Link className="mr-12 text-xs" to="facebook.com/zarafmehedi">View the Profile of a great future developer</Link>
                    <Link className="mr-12 text-xs" to="facebook.com/zarafmehedi">View the Profile of a great future developer</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;