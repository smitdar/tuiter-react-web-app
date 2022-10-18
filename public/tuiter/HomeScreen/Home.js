//import React from "react";
//import {Link} from "react-router-dom";
//import NavigationSidebar from '../NavigationSidebar';
//import HomeScreen from "../HomeScreen";
//import PostSummaryList from '../PostSummaryList';
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/index.js";
import HomeScreen from "./index.js";


(function ($) {
    $('#wd-home').append(` <div class="row mt-2">
                                             <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                                             ${NavigationSidebar()}
                                             </div>
                                             <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                                                 ${HomeScreen()}
                                             </div>
                                             <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-ps-col3">
                                                 <div class="wd-right-section">
                                                     ${ExploreComponent()}
                                                     </div>
                                             </div>
                                         </div>
                                     `);
                             })($);


//const Home = () => {
//    return(
//        <div>
//            <div className="row pt-3">
//                <div className="col-3 col-lg-2 col-xl-2">
//                    <NavigationSidebar active="home"/>
//                </div>
//                <div className="col-9 col-lg-6 col-xl-6">
//                    <HomeScreen/>
//                </div>
//                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
//                    <PostSummaryList/>
//                </div>
//            </div>
//
//            <Link to="/a6/hello">
//                Hello
//            </Link> |
//            <Link to="/a6/practice">
//                Practice
//            </Link>
//        </div>
//    )
//}
//
//export default Home;