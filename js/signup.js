document.getElementById('btnSignUp').addEventListener('click', function () {
  var formFields = {
    username: document.getElementById('name').value,
    email: document.getElementById('emailSignUp').value,
    password: document.getElementById('passwordSignUp').value,
    avatar: document.getElementById('avatarSignUp').value
  }

  fetchApi('POST','/signup', formFields, function (response, statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
      saveToken(response.api_token)
      redirect('/timeline.html')
    }
    else {
      alert(response)
      redirect('/signup.html')
    }
  })
})
