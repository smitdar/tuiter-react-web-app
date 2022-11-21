import {useDispatch} from "react-redux";
import {LikeTuitToggle} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks.js";

const TuitStats = ({
    tuit = {
    liked: "true",
    replies: "4.2K",
    retuits: "3.5K",
    likes: "1k",
    }
}) =>{
const dispatch = useDispatch();
const toggleLike = (tuit) => {
//dispatch(LikeTuitToggle(tuit))
}
return(
<div className = "row mt-3 wd-post-button-row">
    <div className= "col me-1">
        <a className="text-decoration-none text-secondary" href="#">
            <i className="fa-regular fa-comment me-2"></i>
            <span>{tuit.replies}</span>
        </a>
    </div>
    <div className= "col me-1">
           <a className="text-decoration-none text-secondary" href="#">
               <i className="fa-solid fa-retweet me-2"></i>
               <span>{tuit.retuits}</span>
           </a>
    </div>
    <div className= "col me-1">
               <a className="text-decoration-none text-secondary" href="#">
                   <i className="fa-solid fa-heart me-2"></i>
                   <span>{tuit.likes}</span>
               </a>
    </div>

    <div className= "col me-1">
                    <a className="text-decoration-none text-secondary" href="#">
                        <i className="fa-solid fa-share-nodes"></i>
                        <span>{tuit.likes}</span>
                    </a>
    </div>

</div>
  );
 }
export default TuitStats;