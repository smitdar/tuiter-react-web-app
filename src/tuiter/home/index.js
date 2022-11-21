import React from "react";
import homeArray from '../data/home.json';
import TuitsList
  from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
import {useSelector} from "react-redux"

const Homepage = () => {
 const postsArray = useSelector(state => state.tuits)

    return (
       <>
                   <h3 className="ms-3">Home</h3>
                   <WhatsHappening/>
                   <TuitsList/>
               </>
    );
};
export default Homepage;