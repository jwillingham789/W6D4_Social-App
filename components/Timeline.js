import React from 'react'

class Timeline extends React.Component  {
  constructor(props) {
    super(props)
    this.updateTimeline = this.updateTimeline.bind(this)
    this.post = this.post.bind(this)
    this.postsChange = this.postsChange.bind(this)

    this.state = {
      posts: [],
      value: ''
    }
  }
  componentDidMount () {
    this.updateTimeline()
  }

  updateTimeline() {
    fetchApi('GET', '/timeline', {}, (response) => {
      this.setState({posts: response.timeline_posts})
    })
  }

  post(e) {
    if (e.key === 'Enter') {
      fetchApi('POST','/post', {body: e.target.value}, (response, statusCode) => {
        //success
        if (statusCode >= 200 && statusCode < 300) {
          this.setState({value: ''})
          this.updateTimeline()
        }
        //api failed
        else {
          alert('Error')
        }
      })
    }
  }

  postsChange(e) {
    this.setState({value: e.target.value})
  }

    render() {
      var posts = this.state.posts.map(function(post, key) {
        return (
          <div className="thumbnail" key={key}>
            <div className="leftContainer">
              <img className="userImg" src={post.user.avatar} />
            </div>
            <div className="rightContainer">
                <div className="nameIconContainer">
                    <div className="nameContainer">
                        <h3>{post.user.username}</h3>
                    </div>
                </div>
                <div className="bodyContainer">
                    <h5>{post.props}</h5>
                    <p>{post.body}</p>
                </div>
            </div>
          </div>
        )
      })
      return <div>
        <input type="text" placeholder="what do you wish to transmit?" className="form-control" onKeyPress={this.post} value={this.state.value} onChange={this.postsChange} />
        <br />
        {posts}
      </div>
    }
  }

  export default Timeline
