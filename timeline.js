import React from 'react'
import ReactDom from 'react-dom'

import Timeline from './components/Timeline'
import Profile from './components/Profile'

fetchApi('GET', '/timeline', {}, function(response) {
  console.log(response)
  ReactDom.render(<Profile {...response} />, document.getElementById('profile'))
})

ReactDom.render(<Timeline />, document.getElementById('post'))
