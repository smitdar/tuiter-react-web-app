const PostItem = (Homepost) => {
    return(`

<div>

    <div class="wd-flex-div">


        <div class="wd-paddingtop">
            <img class="wd-profile-image" src=${Homepost.profileImage}/>
        </div>
        <div class="wd-floattop">
            <h1 class="wd-profilename"> ${Homepost.userName} </h1>
            <h2 class="wd-handlename">@ ${Homepost.handle} - ${Homepost.time} <br/></h2>

            <br/>
            <p class="wd-text-content">
                ${Homepost.tagline}

            </p>
        </div>
    </div>

    <div class="wd-content-border">

        <img class="wd-content-img" src=${Homepost.descriptionImage}/>

        <br/>
        <h1 class="wd-belowtext-title">
            ${Homepost.topic}
        </h1>
        <h2 class="wd-belowtext">
            ${Homepost.description}
            </h2>
    </div>

    <div>
        <a class="wd-bottom-div" href="#">&#128495; 50</a>
        <a class="wd-bottom-div" href="#">&#8634; 10</a>
        <a class="wd-heart" href="#">&#9829; 22</a>
        <a class="wd-bottom-div" href="#">&#8613;</a>

    </div>
    </br>

</div>
    `);
}
export default PostItem;


//        <div>
//            <div className="row ">
//                <div className="col-2">
//                    <img src={props.profileImage}
//                         alt="Not able to load"
//                         className="wd-image-style rounded-circle pt-1"/>
//                </div>
//                <div className="col-10">
//                    <div className="wd-float-left wd-text-bold wd-font-color-white">{props.userName}</div>
//                    <i className="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i>
//                    <div className="wd-float-left wd-user-handle">@{props.handle}</div>
//                    <div> - ${props.time}</div>
//                    <div className="wd-font-color-white">{props.tagline}</div>
//                    <div className="row border-thin border-grey border-solid">
//                        <img src={props.descriptionImage}
//                             alt="Not able to load"
//                             className="wd-post-image pt-1 pb-1"/>
//                        <div className="wd-text-bold wd-font-color-white">
//                        {props.topic}
//                        </div>
//                        <div className="row ps-4 wd-user-handle">
//                        {props.description}
//                        </div>
//                        { props.link!=="" &&
//                            <div>
//                                <i className="fa fa-link wd-icon-grey"><a className="ps-1 wd-hyperlink-grey" href={props.link}>{props.linkText}</a></i>
//                            </div>
//                        }
//                    </div>
//                    <div className="row">
//                        <div className="col-3 wd-navbar"><div className="wd-hyperlink-grey wd-float-left"><i className="fa fa-comment wd-icon "></i>{props.commentsCount}</div></div>
//                        <div className="col-3 wd-navbar"><div className="wd-hyperlink-grey wd-float-left"><i className="fa fa-retweet wd-icon"></i>{props.retweetsCount}</div></div>
//                        <div className="col-3 wd-navbar"><div className="wd-hyperlink-grey wd-float-left"><i className="fa fa-heart wd-heart-icon"></i>{props.likesCount}</div></div>
//                        <div className="col-3 wd-navbar"><div className="wd-hyperlink-grey wd-float-left"><i className="fa fa-upload wd-icon"></i></div></div>
//                    </div>
//                </div>
//            </div>
//        </div>