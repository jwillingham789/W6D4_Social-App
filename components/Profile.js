import React from 'react'

var Profile = (props) => <div>
  <img className="profileImg center-block" src={props.avatar} />
  <h4 className="text-center profileText">@{props.username}</h4>
  <div className="row">
    <div className="col-sm-6 profileText text-center">Followers: {props.followers_count}</div>
    <div className="col-sm-6 profileText text-center">Following: {props.followees_count}</div>
  </div>
  <a href="followers.html" className="btn btn-default btn-block btn-sm">Follow Lifeforms</a>
</div>

  export default Profile
