document.getElementById('btnSignUp').addEventListener('click', function () {
  var formFields = {
    username: document.getElementById('name').value,
    email: document.getElementById('emailSignUp').value,
    password: document.getElementById('passwordSignUp').value,
    avatar: document.getElementById('avatarSignUp').value
  }

  fetchApi('POST','/signup', formFields, function (response, statusCode) {
    if (statusCode === 201 || statusCode === 200) {
      saveToken(response.token)
      redirect('/timeline.html')
    }
    else {
      redirect('/signup.html')
      alert(response)
    }
  })
})
