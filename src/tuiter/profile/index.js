import React from "react";
import profileArray from './profile.json';
import ProfileComponent
  from "./ProfileComponent";

const Profilepage = () => {
    return (
        <>
            <ul className="list-group ">
                {profileArray.map(profile => {
                    return (

                        <div key={profile.id}>
                            <ProfileComponent profile={profile} />
                        </div>
                    );
                })
                }
            </ul>
        </>
    );
};
export default Profilepage;