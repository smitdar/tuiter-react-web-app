import React from "react";
import homeArray from '../data/home.json';
import HomeComponent
  from "./HomeComponent";
import WhatsHappening from "./whats-happening";
import {useSelector} from "react-redux"

const Homepage = () => {
 const postsArray = useSelector(state => state.tuits)

    return (
        <>
        <div>
        <h1>Home</h1>
        </div>

        <div>
                <WhatsHappening/>
                </div>
            <ul className="list-group ">
                {postsArray.map(home => {
                    return (

                        <div key={home.id}>
                            <HomeComponent home={home} />
                        </div>
                    );
                })
                }
            </ul>
             
        </>
    );
};
export default Homepage;