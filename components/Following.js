import React from 'react'

class Following extends React.Component  {
  constructor(props) {
    super(props)
    this.followToggle = this.followToggle.bind(this)
    this.state = {
      users: props.users
    }
  }

  followToggle(e) {
    var users = this.state.users
    var followingUser = !users[e.target.getAttribute('data-user-key')].is_following

    //Toggle State
    users[e.target.getAttribute('data-user-key')].is_following = followingUser
    this.setState({users: users})

    //Update API
    if (followingUser) {
      fetchApi('POST', '/follow', {
        id: users[e.target.getAttribute('data-user-key')].id
      })
    }
    else {
      fetchApi('POST', '/unfollow', {
        id: users[e.target.getAttribute('data-user-key')].id
      })
    }
  }

  render() {
    var users = this.state.users.map((user, key) => {
      return (
        <div key={key} className="followerContainer thumbnail col-sm-3">
          <div className="followerImgContainer">
            <img src={user.avatar} />
          </div>
          <div className="followerNameContainer">
            <h4 className="text-center">{user.username}</h4>
          </div>
          <div className="followerButtonContainer">
            <button className="btn" onClick={this.followToggle} data-user-key={key}>{user.is_following ? 'Following' : 'Follow'}</button>
          </div>
        </div>
      )
    })
    return <div>{users}</div>
  }

}

  export default Following
