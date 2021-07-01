import React from "react";
import "./Home.css";
import TimelineFeed from "./TimelineFeed";
import profPic from "./images/FirstPortrat.png";
import postPic from "./images/img2.jpg";
import postPic2 from "./images/mu.jpg";
import postPic3 from "./images/pp.jpg";
import postPic4 from "./images/oo.jpg";
import dreamJob from "./images/dream-job.jpg";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Home() {
  return (
    <div className="home">
      <div className="container__top">
        <div className="content">
          <div className="content__profile">
            <div className="cnt__prf__top">
              <div className="cnt__prf__topOne">
                <div className="cnt__prf__topOneImg">
                  <img src={profPic} alt="" />
                </div>
                <div className="cnt__prf__topOneName">
                  <span>Solomon Akinbiyi</span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#696969",
                      textAlign: "center",
                      padding: "0 10px",
                      paddingTop: "5px",
                    }}
                  >
                    Software Developer - Android 📱 | Spring Boot 🌿 | MERN
                    Stack 🚀| | Django 🐍| AI 🤖| Data Visualization 📈
                  </span>
                </div>
                <div className="cnt__prf__topOne__ImgLogoCnt">
                  <img
                    className="cnt__prf__topOne__ImgLogo"
                    src={profPic}
                    alt=""
                  />
                </div>
              </div>
              <div className="cnt__prf__topTwo">
                <div className="cnt__prf__topTwo__container">
                  <div className="cnt__prf__topTwo__containerOne">
                    <div className="cnn">
                      <span>Connections</span>
                    </div>
                    <div className="cnn__number">
                      <span>51</span>
                    </div>
                  </div>
                  <div className="cnt__prf__topTwo__containerTwo">
                    <span>Grow your network</span>
                  </div>
                  <div className="cnt__prf__topTwo__containerThree">
                    <div className="vwprf">
                      <span>Who viewed your profile</span>
                    </div>
                    <div className="vwprf__number">
                      <span>4</span>
                    </div>
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
            <div className="cnt__prf__bottom">
              <div className="cnt__prf__bottomContainer">
                <div className="rcnt">Recent</div>
                <div className="tags">
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;reactjs</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;php</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;springframework</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;springboot</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;reactnative</span>
                  </div>
                </div>
                <div className="grps">Groups</div>
                <div className="tag">
                  <span className="tag__icon">#</span>
                  <span>&nbsp;Javascript Learning group - Li...</span>
                </div>
                <div className="evnts">
                  <span>Events</span>
                  <AddIcon className="addIcon" />
                </div>
                <div className="flwdhash">
                  <span>Followed Hashtags</span>
                </div>
                <div className="tags">
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;artificial intelligence</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;robotics</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;reactjs</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">#</span>
                    <span>&nbsp;reactnative</span>
                  </div>
                  <div className="tag">
                    <span className="tag__icon">&nbsp;&nbsp;</span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      &nbsp;Show more{" "}
                      <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                    </span>
                  </div>
                </div>
              </div>
              <hr style={{ backgroundColor: "#696969" }} />
              <div
                style={{
                  padding: "10px 0",
                  display: "flex",
                  justifyContent: "center",
                  color: "#696969",
                  fontSize: "12px",
                }}
              >
                Discover more
              </div>
            </div>
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
                followers="Software Engineer at Microsoft"
                time="4h"
                postDescribtion="Completed another course of DATA ANALYSIS
Data Analysis with Python. Thanks to IBM AND Coursera
#python #dataanalysis"
                postImage={postPic}
                className="tmlncntn"
              ></TimelineFeed>
              <TimelineFeed
                id="1920292h9"
                profilePic={profPic}
                name="David Mcguell"
                followers="UI UX designer at Codeigniter"
                time="3m"
                postDescribtion="What a journey! So excited 🤩 and humbeled to have reached the position so few companies ever make, and to be the largest cyber security IPO ever? Wow!

Over 7 years ago Tomer Weingarten and Almog Cohen invited me to a coffee outside Check Point offices, a week later I’ve signed the contract, and today we took the company public.

The next chapter for us is even bigger, and we’re writing it now. Thanks to all the employees and leaders who got us here, and to our families and loved ones for all that support. 💜"
                postImage={postPic2}
                className="tmlncntn"
              />
              <TimelineFeed
                id="1920292h9"
                profilePic={profPic}
                name="David Mcguell"
                followers="Android developer - Charity Organization"
                time="20h"
                postDescribtion="When you market on LinkedIn, you reach customers who are ready to do business, wherever they happen to be. https://lnkd.in/ethHUaf"
                postImage={postPic3}
                className="tmlncntn"
              />
              <TimelineFeed
                id="1920292h9"
                profilePic={profPic}
                name="David Mcguell"
                followers="CCNA professional - Google"
                time="25h"
                postDescribtion="As I complete the #microsoftleap program, I wanted to write a series of articles where I go in depth of my experience. It's my first time writing an article and I would love to hear what you thought of it!"
                postImage={postPic4}
                className="tmlncntn"
              />
            </div>
          </div>

          <div className="content__addToFeed">
            <div className="cnt__adtfd__top">
              <div className="cnt__adtfd__topOne">
                <span>Add to your feed</span>
                <InfoIcon className="cnt__adtfd__topOneIcon" />
              </div>
              <div className="cnt__adtfd__topTwo">
                <div className="cnt__adtfd__topDivider">
                  <div className="cnt__adtfd__topDividerLeft">
                    <img src={profPic} alt="" />
                  </div>
                  <div className="cnt__adtfd__topDividerRight">
                    <span className="companyName">freeCodeCamp</span>
                    <span className="companyAbout">Company -- E-Learning</span>
                    <Link className="cnt__adtfd__topDividerLink">
                      <AddIcon /> Follow
                    </Link>
                  </div>
                </div>
                <div className="cnt__adtfd__topDivider">
                  <div className="cnt__adtfd__topDividerLeft">
                    <img src={profPic} alt="" />
                  </div>
                  <div className="cnt__adtfd__topDividerRight">
                    <span className="companyName">freeCodeCamp</span>
                    <span className="companyAbout">Company -- E-Learning</span>
                    <Link className="cnt__adtfd__topDividerLink">
                      <AddIcon /> Follow
                    </Link>
                  </div>
                </div>
                <div className="cnt__adtfd__topDivider">
                  <div className="cnt__adtfd__topDividerLeft">
                    <img src={profPic} alt="" />
                  </div>
                  <div className="cnt__adtfd__topDividerRight">
                    <span className="companyName">freeCodeCamp</span>
                    <span className="companyAbout">Company -- E-Learning</span>
                    <Link className="cnt__adtfd__topDividerLink">
                      <AddIcon /> Follow
                    </Link>
                  </div>
                </div>
                <div className="cnt__adtfd__topDivider">
                  <div className="cnt__adtfd__topDividerLeft">
                    <img src={profPic} alt="" />
                  </div>
                  <div className="cnt__adtfd__topDividerRight">
                    <span className="companyName">freeCodeCamp</span>
                    <span className="companyAbout">
                      Company -- E-Learning And Information Technology
                    </span>
                    <Link className="cnt__adtfd__topDividerLink">
                      <AddIcon /> Follow
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cnt__adtfd__topThree">
                <div>
                  <span>View all recommendations </span>
                  <ArrowForwardIcon className="cnt__adtfd__topThreeIcon" />
                </div>
              </div>
            </div>
            <div className="cnt__adtfd__middle">
              <div className="cnt__adtfd__topOne">
                <span>Today's top courses</span>
                <InfoIcon className="cnt__adtfd__topOneIcon" />
              </div>
              <div className="cnt__adtfd__middleTwo">
                <div className="cnt__adtfd__middleTwoCnt">
                  <span>1. &nbsp;</span>
                  <div className="cnt__adtfd__middleTwoCntSecond">
                    <span>How to stand out Remotely</span>
                    <span className="cnt__adtfd__middleTwoCntSecondTwo">
                      Modecarft and Bianca Lager
                    </span>
                  </div>
                </div>
                <div className="cnt__adtfd__middleTwoCnt">
                  <span>2. &nbsp;</span>
                  <div className="cnt__adtfd__middleTwoCntSecond">
                    <span>How to stand out Remotely</span>
                    <span className="cnt__adtfd__middleTwoCntSecondTwo">
                      Modecarft and Bianca Lager
                    </span>
                  </div>
                </div>
                <div className="cnt__adtfd__middleTwoCnt">
                  <span>3. &nbsp;</span>
                  <div className="cnt__adtfd__middleTwoCntSecond">
                    <span>How to stand out Remotely</span>
                    <span className="cnt__adtfd__middleTwoCntSecondTwo">
                      Modecarft and Bianca Lager
                    </span>
                  </div>
                </div>
              </div>
              <div className="cnt__adtfd__topThree">
                <div>
                  <span>Show more on LinkedIn Learning </span>
                  <ArrowForwardIcon className="cnt__adtfd__topThreeIcon" />
                </div>
              </div>
            </div>
            <div className="cnt__adtfd__bottom">
              <img src={dreamJob} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
