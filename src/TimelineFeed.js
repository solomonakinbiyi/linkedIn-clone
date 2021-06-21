import React from 'react'
import './TimelineFeed.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

function TimelineFeed({ id, profilePic, name, postDescribtion, postImage }) {
    return (
        <div className="tmln">
            <div className="feed">
                <div className="feed__prfSection">
                    <div className="prfSection__prof">
                        <div className="prfImg"><img src={profilePic} alt="" /></div>
                        <div className="prfName">{name}</div>
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
                <div className="activity">
                    <div className="activity__line">
                        <hr />
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

    )
}

export default TimelineFeed
