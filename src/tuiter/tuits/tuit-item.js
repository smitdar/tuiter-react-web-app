import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats"
const TuitItem = (
                            {tuit = {
                              _id: 123,
                              userName: 'Elon Musk',
                              handle: "  elonmusk",
                              time: " 23h",
                              title: "Amazing show about @Inspiration4x mission!",
                              userImage: "../Tuiterimages/Starship.webp",
                              image: "../Tuiterimages/Starship.webp",
                              image_title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                              tuit: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
                              image_link: "netflix.com",
                              liked: "true",
                              replies: "4.2K",
                              retuits: "3.5K",
                              likes: "37.5K"}}
                              ) => {
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
 }
 return(<li className="list-group-item">
           <div className="row">
             <div className="col-auto">
               <img width={40}
                    className="float-end rounded-circle"
                    src={tuit.image}/>
             </div>
             <div className="col-10">
               <div>
                 <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                 <span className = "fw-bolder">{tuit.userName}</span>
                 <span className = "text-secondary pe-1">{tuit.handle}</span>
                 <span className = "text-secondary">{tuit.time}</span>
                 <div>{tuit.tuit}</div>
                 <TuitStats key = {tuit._id} tuit={tuit}/>
                 </div>
               </div>
              </div>
           </li>
            );
}
export default TuitItem;