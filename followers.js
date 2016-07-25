import React from 'react'
import ReactDom from 'react-dom'

import Following from './components/Following'

fetchApi('GET', '/users', {}, function(response) {
  console.log(response)
  ReactDom.render(<Following users={response} />, document.getElementById('followerPost'))
})
