//const ExploreComponent = () => {
//    return `
//   <div class="wd-section-border">
//               <div class="wd-search">
//                   <div class="row">
//                       <div class="col-11"><input type="text" placeholder=" &#128269; Search Tuiter"
//                                                  class="wd-rounded-corners-all-around"/></div>
//                       <div class="col-1"><a href="explore-settings.html" class="wd-settings"><i class="fa fa-cog"
//                                                                                                 aria-hidden="true"></i></a>
//                       </div>
//                   </div>
//
//               </div>
//   <div>
//   <div class="wd-section-border">
//                   <div class="wd-nav-tabs-line">
//                       <ul class="nav nav-tabs">
//                           <table>
//                               <thead>
//                               <tr>
//                                   <th>
//                                       <li class="nav-item"><a href="foryou.html" class="nav-link active"> For
//                                           You </a>
//                                       </li>
//                                   </th>
//                                   <th>
//                                       <li class="nav-item"><a href="trending.html" class="nav-link">
//                                           Trending </a></li>
//                                   </th>
//                                   <th>
//                                       <li class="nav-item"><a href="covid19.html" class="nav-link">
//                                           COVID-19 </a></li>
//                                   </th>
//                                   <th>
//                                       <li class="nav-item"><a href="news.html" class="nav-link"> News </a></li>
//                                   </th>
//                                   <th>
//                                       <li class="nav-item"><a href="sports.html" class="nav-link"> Sports </a>
//                                       </li>
//                                   </th>
//                                   <th>
//                                       <li class="nav-item d-none d-md-block"><a href="entertainment.html"
//                                                                                 class="nav-link">
//                                           Entertainment </a>
//                                       </li>
//                                   </th>
//
//                               </tr>
//                               </thead>
//                           </table>
//                       </ul>
//                   </div>
//
//                   <div class="wd-section-color">
//                       <div class="wd-line">
//                           <div class="wd-top-image">
//
//                               <image src="../../Tuiterimages/Starship.webp" class="wd-top-image"></image>
//                               <h3 class="wd-image-text "> SpaceX's Starship</h3>
//
//                           </div>
//                       </div>
//
//
//                       <div class="wd-line">
//                           <img class="wd-images" src="../../Tuiterimages/oilPic.jpg"/>
//                           <h6 class="wd-title"> The New York Times - Yesterday</h6>
//                           <br/>
//                           <h4 class="container"> CNN : Oil price hike continues </h4>
//                           <h6 class="wd-title">100K Tweets</h6>
//
//                       </div>
//
//                       <div class="wd-line">
//                           <img class="wd-images" src="../../Tuiterimages/covid19booster.jpeg"/>
//                           <h6 class="wd-title"> Bloomberg Opinion - Yesterday</h6>
//                           <br/>
//                           <h4 class="container">Thinking about getting a booster? Read this first. </h4>
//                           <h6 class="wd-title">240K Tweets</h6>
//                       </div>
//
//
//                       <div class="wd-line">
//                           <img class="wd-images" src="../../Tuiterimages/IndvsAus.webp"/>
//                           <h6 class="wd-title">SPORTS - LIVE</h6>
//                           <br/>
//                           <h4 class="container">Cricket : India beats Australia 2-1 in T20I series</h4>
//                           <h6 class="wd-title">1.1M Tweets</h6>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//
//`;
//};
//export default ExploreComponent;
import ComponentListItem from "./ComponentListItem.js"
import posts from "./posts.js"
const ExploreComponent = () => {
    return `
<div>
    ${posts.map(posts => {
            return (ComponentListItem(posts));
        }).join('')}
    </div>

`;
};
export default ExploreComponent;