import React from 'react'

class Post extends React.Component  {
  fetchApi('GET','/timeline', {}, function (response, statusCode)) {
  render() {
    response.forEach(function(result){
    return (
          <div className="thumbnail">
              <div className="leftContainer">
                <img src={result.user.avatar} />
              </div>
              <div className="rightContainer">
                  <div className="nameIconContainer">
                      <div className="nameContainer">
                          <h3>{result.user.username}</h3>
                      </div>
                      <div className="iconContainer">
                          <a href="#"><img className="chirpIcon" src="images/ChirpIcon.svg" title="Follow" /></a>
                      </div>
                  </div>
                  <div className="bodyContainer">
                      <h5 className="text-muted">{result.created_at}</h5>
                      <p>{result.body}</p>
                  </div>
              </div>
          </div>
          )
      }
    }
  }
}

export default Post
