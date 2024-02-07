// import React from 'react';

import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeNews = ({ homeNews }) => {
    const { title, author, img, name, published_date, details, image_url, thumbnail_url, rating, number, total_view } = homeNews;
    return (
        <div>
            <div className="alert">
                <div className="">
                    <img src={author.img} style={{ borderRadius: "50%", borderColor: "#000", width: '50px', height: '50px' }} alt="" />
                </div>

                <div>
                    <h6 className=" text-base" > {author.name}</h6>
                    <span className=" text-sm">{author.published_date}</span>
                </div>
                <div>
                    <button className="btn btn-sm">
                        <FaBookmark></FaBookmark>
                    </button>
                    <button className="btn btn-sm">
                        <FaShare></FaShare>
                    </button>

                </div>
            </div>
            {/* Card Body */}
            <div className="card w-full mb-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                </div>
                <figure className="pr-4 pl-4"><img src={image_url} alt="Shoes" /></figure>


                <div>
                    <p className=" text-lg pr-4 pl-4 mt-6">{details}</p>
                    <Link className="text-base  pr-4 pl-4 text-orange-500 underline">Read More</Link>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="rating pr-4 pl-4  ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span className="text-lg">{rating.number}</span>
                    </div>
                    <div  className="flex gap-2 mb-6">
                         <FaEye></FaEye> 
                         <p className="text-base mr-3"> { total_view}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeNews;