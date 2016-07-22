fetchApi('GET','/timeline', formFields, function (response, statusCode) {
  response.forEach(function(result){
      console.log(result)

      var thumbnailPost = document.createElement(div)
      thumbnailPost.classList.add('thumbnail')
      var thumbnailRow = document.createElement(div)
      thumbnailRow.classList.add('row')
      var thumbnailWidth = document.createElement(div)
      thumbnailWidth.classList.add('col-sm-10')
      var username = document.createElement(h3)
      username.innerHTML = "ojasofijqw"
      var thumbnailWidthOffset = document.createElement(div)
      thumbnailWidthOffset.classList.add('col-sm-1 col-sm-offset-1')
      var anchor = document.createElement(a)
      var img = document.createElement(img)
      img.setAttribute('src', '')
      var createdWidth = document.createElement(div)
      createdWidth.classList.add('col-sm-12')
      var createdText = document.createElement(h5)
      createdText.classList.add('text-muted')
      var bodyText = document.createElement(p)
      bodyText.innerHTML = "asdjpofijasdf"




      thumbnailWidth.appendChild(username)
      // thumbnailWidth.appendChild(thumbnailWidthOffset)

      thumbnailRow.appendChild(thumbnailWidth)
      thumbnailPost.appendChild(thumbnailRow)




      document.getElementById('post').appendChild(thumbnailPost)


  })
})
