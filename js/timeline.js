fetchApi('GET','/timeline', {}, function (response, statusCode) {
  console.log(response);
  //updating profile info

  document.getElementById('profileAvatar').setAttribute('src', response.avatar)
  document.getElementById('profileUsername').innerHTML = response.username
  document.getElementById('followers').innerHTML = response.followers_count
  document.getElementById('following').innerHTML = response.followees_count

  response.timeline_posts.forEach(function(result){
      var finalPost = document.createElement('div')
      finalPost.classList.add('thumbnail')

      //LEFT CONTAINER
      var leftContainer = document.createElement('div')
      leftContainer.classList.add('leftContainer')
      var userImage = document.createElement('img')
      userImage.setAttribute('src', result.user.avatar)


      //RIGHT CONTAINER
      var rightContainer = document.createElement('div')
      rightContainer.classList.add('rightContainer')
      var nameIconContainer = document.createElement('div')
      nameIconContainer.classList.add('nameIconContainer')
      var nameContainer = document.createElement('div')
      nameContainer.classList.add('nameContainer')
      var username = document.createElement('h3')
      username.innerHTML = result.user.username
      var iconContainer = document.createElement('div')
      iconContainer.classList.add('iconContainer')
      var img = document.createElement('img')
      img.classList.add('chirpIcon')
      img.setAttribute('src', 'images/ChirpIcon.svg')

      var bodyContainer = document.createElement('div')
      bodyContainer.classList.add('bodyContainer')
      var createdText = document.createElement('h5')
      createdText.innerHTML = result.created_at
      var bodyText = document.createElement('p')
      bodyText.innerHTML = result.body

      //leftContainer
      leftContainer.appendChild(userImage)

      //right container
      //nameIcon container
      nameContainer.appendChild(username)
      iconContainer.appendChild(img)
      nameIconContainer.appendChild(nameContainer)
      nameIconContainer.appendChild(iconContainer)
      bodyContainer.appendChild(createdText)
      bodyContainer.appendChild(bodyText)
      rightContainer.appendChild(nameIconContainer)
      rightContainer.appendChild(bodyContainer)

      //thumbnail
      finalPost.appendChild(leftContainer)
      finalPost.appendChild(rightContainer)

      document.getElementById('post').appendChild(finalPost)
  })
})

//signout
document.getElementById('signout').addEventListener('click', function (){
  sessionStorage.removeItem('api_token')
  redirect('/index.html')
})


//send message
document.getElementById('messageSubmit').addEventListener('click', function (){
  var formFields = {
    body: document.getElementById('messageArea').value
  }
  fetchApi('POST','/post', formFields, function (response, statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
      // saveToken(response.api_token)
      // document.getElementById('messageArea').innerHTML = ''
    }
    else {
      alert("something went wrong")

    }
  })
})
