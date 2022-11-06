import React from "react";
import homeArray from './home.json';
import HomeComponent
  from "./HomeComponent";
import WhatsHappening from "./whats-happening";

const Homepage = () => {
    return (
        <>
        <div>
        <h1>Home</h1>
        </div>

        <div>
                <WhatsHappening/>
                </div>
            <ul className="list-group ">
                {homeArray.map(home => {
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