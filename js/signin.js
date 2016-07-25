document.getElementById('btnSignIn').addEventListener('click', function () {
  var formFields = {
    email: document.getElementById('emailSignIn').value,
    password: document.getElementById('passwordSignIn').value
  }

  fetchApi('POST', '/login', formFields, function (response, statusCode) {
    console.log(response)
    if (statusCode === 201 || statusCode === 200) {
      saveToken(response.api_token)
      redirect('/timeline.html')
    }
    else {
      alert(response.error)
      redirect('/index.html')
    }
  })
})
