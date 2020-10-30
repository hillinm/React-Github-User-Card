import React from 'react';

const GitUserCard = (props) => {
    return (
    <div className="container">
        <div className="user">
            <h1>{props.data.name}</h1>
            <h2>{props.data.company}</h2>
            <h2>{props.data.blog}</h2>
            <h2>{props.data.location}</h2>
            <h2>{props.data.email}</h2>
            <h2>{props.data.bio}</h2>
            <h2>{props.data.twitter_username}</h2>
            <h2>{props.data.public_repos}</h2>
            <h2>{props.data.followers}</h2>
            <h2>{props.data.following}</h2>
        </div>
        <div className="followers">
            <h1>Followers</h1>
            {props.followers.map(follower => {
                return (
                    <div>
                        {follower.login}
                    </div>
                )
            })}
        </div>
    </div>
    )
};

export default GitUserCard;