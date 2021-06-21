import React from 'react'
import './Home.css'
import TimelineFeed from './TimelineFeed'
import profPic from './images/FirstPortrat.png'
import postPic from './images/img2.jpg'
import postPic2 from './images/mu.jpg'
import postPic3 from './images/pp.jpg'
import postPic4 from './images/oo.jpg'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <div className="content__profile">
                        <div className="cnt__prf__top">
                            <div className="cnt__prf__topOne">
                                <div className="cnt__prf__topOneImg">
                                    <img src={profPic} alt="" />
                                </div>
                                <div className="cnt__prf__topOneName">
                                    <span>Solomon Akinbiyi</span>
                                </div>
                                <div className="cnt__prf__topOne__ImgLogoCnt">
                                    <img className="cnt__prf__topOne__ImgLogo" src={profPic} alt="" />
                                </div>
                            </div>
                            <div className="cnt__prf__topTwo">
                                <div className="cnt__prf__topTwo__container">
                                    <div className="cnt__prf__topTwo__containerOne">
                                        <div className="cnn"><span>Connections</span></div>
                                        <div className="cnn__number"><span>51</span></div>
                                    </div>
                                    <div className="cnt__prf__topTwo__containerTwo">
                                        <span>Grow your network</span>
                                    </div>
                                    <div className="cnt__prf__topTwo__containerThree">
                                        <div className="vwprf"><span>Who viewed your profile</span></div>
                                        <div className="vwprf__number"><span>4</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="cnt__prf__topThree">
                                <div className="cnt__prf__topThree__container">
                                    <div className="cnt__prf__topThree__cntTop">
                                        <span>Access exclusive tools & insights</span>
                                    </div>
                                    <div className="cnt__prf__topThree__cntBottom">
                                        <CreditCardIcon className="cnt__prf__topThree__cntBottomIcon"></CreditCardIcon>
                                        <div>
                                            <span>&nbsp;Reactivate Premium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cnt__prf__topFour">
                                <div>
                                    <BookmarkIcon className="cnt__prf__topFourIcon"></BookmarkIcon>
                                    <span>&nbsp;My Item</span>
                                </div>
                            </div>
                        </div>
                        <div className="cnt__prf__bottom"></div>
                    </div>
                    <div className="content__timeline">
                        <div className="cnt__tml__post">
                            <div className="cnt__tml__postTop">
                                <img src={profPic} alt="" />
                                <input type="text" placeholder="Start a post" />
                            </div>
                            <div className="cnt__tml__postBottom">
                                <div className="postObjects">
                                    <PhotoIcon className="postObjects__photo"></PhotoIcon>
                                    <div>Photo</div>
                                </div>
                                <div className="postObjects">
                                    <VideoLibraryIcon className="postObjects__video"></VideoLibraryIcon>
                                    <div>Video</div>
                                </div>
                                <div className="postObjects">
                                    <EventIcon className="postObjects__event"></EventIcon>
                                    <div>Event</div>
                                </div>
                                <div className="postObjects">
                                    <AssignmentIcon className="postObjects__article"></AssignmentIcon>
                                    <div>Write Article</div>
                                </div>
                            </div>
                        </div>
                        <div className="cnt__tml__feed">
                            <TimelineFeed
                                id="1920292h9"
                                profilePic={profPic}
                                name="David Mcguell"
                                postDescribtion="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                                postImage={postPic}

                            ></TimelineFeed>
                            <TimelineFeed
                                id="1920292h9"
                                profilePic={profPic}
                                name="David Mcguell"
                                postDescribtion="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                                postImage={postPic2}

                            />
                            <TimelineFeed
                                id="1920292h9"
                                profilePic={profPic}
                                name="David Mcguell"
                                postDescribtion="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                                postImage={postPic3}

                            />
                            <TimelineFeed
                                id="1920292h9"
                                profilePic={profPic}
                                name="David Mcguell"
                                postDescribtion="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                                postImage={postPic4}

                            />
                        </div>
                    </div>
                    <div className="content__addToFeed">
                        <div className="cnt__adtfd__top"></div>
                        <div className="cnt__adtfd__middle"></div>
                        <div className="cnt__adtfd__bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
