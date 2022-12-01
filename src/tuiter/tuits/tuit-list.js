import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "./tuit-item";


const TuitsList = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <ul className="list-group wd-post-summary-list rounded">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <TuitItem key={post._id} post={post}/>
                )
            }
        </ul>
    );
};

export default TuitsList;