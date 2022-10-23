import React from "react";
import homeArray from './home.json';
import HomeComponent
  from "./HomeComponent";

const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group ">
                <a href="/#" className="list-group-item wd-list-group "><strong>Who to follow</strong></a>
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
export default WhoToFollowList;