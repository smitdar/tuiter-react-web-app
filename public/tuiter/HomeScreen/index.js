import PostItem from "./PostItem.js";
import Homepost from "./Homepost.js";



//const HomeScreen = () => {
//                             return `
//                              <div>
//                                      ${Homepost.map(posts => {
//                                       return (PostItem(posts));
//                                      }).join('')}
//                                     </div>
//                                      `
//                                };




//export default HomeScreen;

/////

const HomeScreen = () => {

    return (`

            <ul class="list-group">

            <!-- continue here -->

            ${Homepost.map(post => {

        return (PostItem(post));

    }).join('')

        }

            </ul>

`);

}
export default HomeScreen;

//const HomeScreen = () => {
//    return(`
//        <div>
//            <ul className="list-group wd-font-size">
//                {
//                Homepost.map(p => {
//                    return(<PostItem userName={p.userName} handle={p.handle} time={p.time} tagline={p.tagline} profileImage={p.profileImage} descriptionImage={p.descriptionImage} topic={p.topic} description={p.description} link={p.link} linkText={p.linkText} commentsCount={p.commentsCount} retweetsCount={p.retweetsCount} likesCount={p.likesCount}/>)
//                })
//            }
//            </ul>
//        </div>
//    `);
//}
//
//export default HomeScreen;