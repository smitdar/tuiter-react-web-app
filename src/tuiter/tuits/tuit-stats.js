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
//const toggleLike = (tuit) => {
//dispatch(LikeTuitToggle(tuit))
//}
return(
<div className = "row mt-3 wd-post-button-row">
    <div className= "col me-1">
        <a className="text-decoration-none text-secondary" href="#">
            &#128495;
            <span>{tuit.replies}</span>
        </a>
    </div>
    <div className= "col me-1">
           <a className="text-decoration-none text-secondary" href="#">
               &#8634;
               <span>{tuit.retuits}</span>
           </a>
    </div>
    <div className= "col me-1">
               <a className="text-decoration-none text-secondary" href="#">
                   &#9829;
                   <span>{tuit.likes}</span>
               </a>
    </div>

    <div className= "col me-1">
                    <a className="text-decoration-none text-secondary" href="#">
                    &#8613;
                    </a>
    </div>

</div>
  );
 }
export default TuitStats;

