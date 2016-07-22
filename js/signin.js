document.getElementById('btnSignIn').addEventListener('click', function () {
  var formFields = {
    email: document.getElementById('emailSignIn').value,
    password: document.getElementById('passwordSignIn').value
  }

  fetchApi('/login', formFields, function (response, statusCode) {
    if (statusCode === 201 || statusCode === 200) {
      saveToken(response.token)
      redirect('/timeline.html')
    }
    else {
      redirect('/index.html')
      alert(response.error)
    }
  })
})
