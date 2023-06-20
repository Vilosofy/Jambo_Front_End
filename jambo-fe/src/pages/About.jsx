import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/aboutPage/Hero";
import Statistic from "../components/aboutPage/Statistic";
import Game from "../components/aboutPage/AboutGame";
import System from "../components/aboutPage/System";
import Download from "../components/aboutPage/Download";
import Upload from "../components/uploadPage/UploadTitle";
import UploadDesc from "../components/uploadPage/UploadDesc1";
import UploadDesc2 from "../components/uploadPage/UploadDesc2";
import UploadDesc3 from "../components/uploadPage/UploadDesc3";
import UploadFileAPK from "../components/uploadPage/UploadFileApk";
import GameGenre from "../components/uploadPage/GameGenre";
import Crowdfund from "../components/uploadPage/OpenCrowdfund";
import Platform from "../components/uploadPage/Platform";

function About()  {
    return (
        <div className="About">
            <div className="w-[1440px] h-[136px]">
                <Nav />
            </div>
            <div className="flex flex-col items-center gap-[50px] pb-[50px]">
                <Hero />
                <Statistic />
                <Game />
                <System />
                <Download />
                {/* <Upload />
                <GameGenre />
                <UploadDesc />
                <UploadDesc2 />
                <UploadDesc3 />
                <UploadFileAPK />
                <Platform />
                <Crowdfund /> */}
            </div>
            <Footer />
        </div>
    );
};

export default About;