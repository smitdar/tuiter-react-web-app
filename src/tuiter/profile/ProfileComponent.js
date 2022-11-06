import "./index.css";
const ProfileComponent = (
 {
   profile
 }
) => {
 return(


 <div>
     <div>
        <h3 className="wd-details">{profile.firstName} {profile.lastName}</h3>
        <h6>{profile.followingCount} Tuits</h6>
     </div>

    <img className="wd-bannerPicture" src={profile.bannerPicture}/>
    <img className="wd-profilePicture" src={profile.profilePicture}/>
    <a className="wd-edit" href="edit-profile.html">
                <button class="btn btn-primary btn-sm">Edit Profile</button>
            </a>
    <h2>{profile.firstName} {profile.lastName}</h2>
    <h6>{profile.handle}</h6>
    <p>{profile.bio}</p>

  <div>
    <p className="wd-details"> <b>&#9906;</b>Living in {profile.location} <b>&#9893;</b></p>
    <p className="wd-details">  Born on {profile.dateOfBirth}</p>
    <p className="wd-details"> &#128197; Joined on {profile.dateJoined}</p>
    <i class="fa-map-marker"></i>
  </div>

    <p> <b>{profile.followingCount}</b> Following  <b>{profile.followersCount}</b> Followers </p>

</div>


 );
};
export default ProfileComponent;