import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
//import WhoToFollowListItem
//  from "./WhoToFollowList/index.js";
function Tuiter() {
 return (
   <div>
     <Nav/>
     <h1>Tuiter</h1>
     <NavigationSidebar active="home"/>
//          <WhoToFollowListItem/>
   </div>
 );
};
export default Tuiter