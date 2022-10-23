import "./index.css";
const HomeComponent = (
 {
   Homepost
 }
) => {
 return(
//  <li className="list-group-item">
//   <div className="row">
//   <div className="col-2">
//          <img className="rounded-circle" height={48} width ={48} src={who.avatarIcon}/>
//        </div>
//     <div className="col-8">
//       <div className="fw-bold">{who.userName}</div>
//       <div>@{who.handle}</div>
//     </div>
//     <div className="col-2">
//       <button className="btn btn-primary rounded-pill float-end">Follow</button>
//     </div>
//   </div>
//  </li>

<div>

    <div class="wd-flex-div">


        <div class="wd-paddingtop">
            <img class="wd-profile-image" src={Homepost.profileImage}/>
        </div>
        <div class="wd-floattop">
            <h1 class="wd-profilename"> {Homepost.userName} </h1>
            <h2 class="wd-handlename">@{Homepost.handle} - {Homepost.time} <br/></h2>

            <br/>
            <p class="wd-text-content">
                {Homepost.tagline}

            </p>
        </div>
    </div>

    <div class="wd-content-border">

        <img class="wd-content-img" src={Homepost.descriptionImage}/>

        <br/>
        <h1 class="wd-belowtext-title">
            {Homepost.topic}
        </h1>
        <h2 class="wd-belowtext">
            {Homepost.description}
            </h2>
    </div>

    <div>
        <a class="wd-bottom-div" href="#">&#128495; 50</a>
        <a class="wd-bottom-div" href="#">&#8634; 10</a>
        <a class="wd-heart" href="#">&#9829; 22</a>
        <a class="wd-bottom-div" href="#">&#8613;</a>

    </div>


</div>

 );
};
export default HomeComponent;