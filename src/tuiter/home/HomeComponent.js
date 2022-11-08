import "./index.css";
const HomeComponent = (
 {
   home
 }
) => {
 return(



<div className="wd-line">

    <div className="wd-flex-div">


        <div className="wd-paddingtop">
            <img className="wd-profile-image" src={home.image}></img>
        </div>
        <div className="wd-floattop">
            <h1 className="wd-profilename">{home.userName} </h1>
            <h2 className="wd-handlename"> {home.handle} - {home.time}<br/></h2>

            <br/>
            <p className="wd-text-content">
                {home.tuit}

            </p>
        </div>
    </div>
<br/>

    <div>
        <a className="wd-bottom-div" href="#">&#128495; {home.replies}</a>
        <a className="wd-bottom-div" href="#">&#8634; {home.retuits}</a>
        <a className="wd-heart" href="#">&#9829; {home.likes}</a>
        <a className="wd-bottom-div" href="#">&#8613;</a>

    </div>
    <br/>

</div>


 );
};
export default HomeComponent;