import React from "react";
import "./TimelineFeed.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUpOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PublicIcon from "@material-ui/icons/Public";
import ThumbUpIconFilled from "@material-ui/icons/ThumbUp";

function TimelineFeed({ id, profilePic, name, postDescribtion, postImage, followers, time }) {
  return (
    <div className="tmln">
      <div className="feed">
        <div className="feed__prfSection">
          <div className="prfSection__prof">
            <div className="prfImg">
              <img src={profilePic} alt="" />
            </div>
            <div className="prfName">
              <span>{name}</span>
              <span className="flws">{followers}</span>
              <span className="tme">
                {time}&nbsp;
                <FiberManualRecordIcon className="dot" />
                &nbsp;
                <PublicIcon className="globe" />
              </span>
            </div>
          </div>
          <div className="follow__btn">
            <AddIcon></AddIcon>
            <span>Follow</span>
          </div>
        </div>
        <div className="describtion">{postDescribtion}</div>
        <div className="feed__content">
          <img src={postImage} alt="" className="postImage" />
        </div>
        <div className="like__section">
          <div className="like__sectionIconContainer">
            <ThumbUpIconFilled className="like__sectionIcon" />
          </div>
          <span>&nbsp;937 153 comments</span>
        </div>
        <div className="activity">
          <div className="activity__line">
            {/* <hr style={{ borderColor: "#696969", borderStyle: 'solid' }} /> */}
            <div
              style={{
                backgroundColor: "#696969",
                height: "1px",
              }}
            ></div>
          </div>
          <div className="activity__cnt">
            <div className="cnt__part">
              <ThumbUpIcon className="cnt__partIcon"></ThumbUpIcon>
              <div>Like</div>
            </div>
            <div className="cnt__part">
              <MessageIcon className="cnt__partIcon"></MessageIcon>
              <div>Comment</div>
            </div>
            <div className="cnt__part">
              <ShareIcon className="cnt__partIcon"></ShareIcon>
              <div>Share</div>
            </div>
            <div className="cnt__part">
              <SendIcon className="cnt__partIcon"></SendIcon>
              <div>Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineFeed;
