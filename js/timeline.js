fetchApi('GET','/timeline', {}, function (response, statusCode) {
  console.log(response)
  response.forEach(function(result){
      console.log(result)

      console.log(result.user.username)

      var thumbnailPost = document.createElement('div')
      thumbnailPost.classList.add('thumbnail')
      var thumbnailRow = document.createElement('div')
      thumbnailRow.classList.add('row')
      var thumbnailWidth = document.createElement('div')
      thumbnailWidth.classList.add('col-sm-10')
      var username = document.createElement('h3')
      username.innerHTML = result.user.username
      var thumbnailWidthOffset = document.createElement('div')
      thumbnailWidthOffset.classList.add('col-sm-1')
      thumbnailWidthOffset.classList.add('col-sm-offset-1')
      var anchor = document.createElement('a')
      var img = document.createElement('img')
      img.setAttribute('src', result.user.avatar)
      var createdWidth = document.createElement('div')
      createdWidth.classList.add('col-sm-12')
      var createdText = document.createElement('h5')
      createdText.classList.add('text-muted')
      createdText.innerHTML = result.created_at
      var bodyText = document.createElement('p')
      bodyText.innerHTML = result.body


      createdWidth.appendChild(bodyText)
      createdWidth.appendChild(createdText)

      anchor.appendChild(img)
      thumbnailWidthOffset.appendChild(anchor)

      thumbnailWidth.appendChild(username)

      thumbnailRow.appendChild(thumbnailWidth)
      thumbnailRow.appendChild(thumbnailWidthOffset)
      thumbnailRow.appendChild(createdWidth)

      thumbnailPost.appendChild(thumbnailRow)

      document.getElementById('post').appendChild(thumbnailPost)


  })
})
