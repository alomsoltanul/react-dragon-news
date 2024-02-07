// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "../AllMappingFetch/News";


const LeftNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("../../../public/categories.json")
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])

    // NEWS 
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("../../../public/news.json")
            .then(res => res.json())
            .then(data => setNews(data));
    },[])

    return (
        <div>

            <h2 className=" text-2xl text-center mb-6 ">All Categories</h2>
            {
                category.map(cats => <Link
                    className="block text-center border-b-2 p-4 font-semibold"
                    key={cats.id}
                    to={`/category/${cats.id}`} >
                    {cats.name}

                </Link>)
            }
            <h2 className=" text-2xl text-center mt-12 ">News</h2>
            {
                news.slice(0,4).map(news => <News key={news.category_id} news={news}></News>)
            }
        </div>
    );
};

export default LeftNav;