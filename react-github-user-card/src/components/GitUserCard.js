import React from 'react';
import "../App.css"

const GitUserCard = (props) => {
    return (
    <div className="container">
        <div className="card">
        <div className="user">
            <h1>{props.data.name}</h1>
            <h2>{props.data.bio}</h2>
            <h2>{props.data.company}</h2>
            <p>Employer</p>
            <h2>{props.data.location}</h2>
            <p>Resides In</p>
            <h2>{props.data.blog}</h2>
            <img src="https://img.utdstc.com/icons/facebook-android.png:75" width="40px" alt="Facebook"></img>
            <h2>{props.data.twitter_username}</h2>
            <img src="https://i0.wp.com/natarajanlab.mgh.harvard.edu/wp-content/uploads/2017/12/Twitter-icon.png" width="40px" alt="Twittter"></img>
        </div>
        <div className="followers">
            <h1>Followers</h1>
            {props.followers.map(follower => {
                return (
                    <div>
                        <h2>{follower.login}</h2>
                    </div>
                )
            })}
        </div>
        </div>

    </div>
    )
};

export default GitUserCard;