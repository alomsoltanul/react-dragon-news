// import React from 'react';

import BreakingNews from "../../shared/BreakingNews/BreakingNews";
import Header from "../../shared/Header/Header";
import LeftNav from "../../shared/LeftNav/LeftNav";
import Navbar from "../../shared/Navbar/Navbar";
// import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";
import HomeContent from "./HomePageContent/HomeContent";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                <div className="border ">
                    <LeftNav></LeftNav>
                </div>
                <div className="border col-span-2">
                    <h3 className="text-2xl">
                        <HomeContent></HomeContent>
                    </h3>
                </div>
                <div className="border ">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;