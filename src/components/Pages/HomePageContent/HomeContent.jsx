// import React from 'react';

import { useEffect, useState } from "react";
import HomeNews from "../../../shared/AllMappingFetch/HomeNews";

const HomeContent = () => {
    const [homeContent, setHomeContent] = useState([]);
    useEffect( () => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setHomeContent(data));
    },[])
    return (
        <div>
            <h2 className=" text-2xl text-center"> Dragon News Central {homeContent.length}</h2>
            {
                homeContent.slice(0,10).map(homeNews => <HomeNews key={homeNews.category_id} homeNews={homeNews}></HomeNews> )
            }
        </div>
    );
};

export default HomeContent;