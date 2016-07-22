// API Host
// var api = 'https://calm-beach-80027.herokuapp.com/'
var api = 'http://491f03f5.ngrok.io'
var token = sessionStorage.getItem('token')

// Utilities
// endpoint ... /users
// formFields ... {name: 'Joe'}
function fetchApi(endpoint, formFields, callback) {
  var statusCode

  if (formFields === undefined || formFields === null || formFields === '') {
    formFields = {}
  }
  formFields.token = token

  fetch(api + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formFields)
  })
    .then(function(response) {
      statusCode = response.status
      return response.json()
    })
    .then(function(data) {
      callback(data, statusCode)
    })
}

function saveToken(token) {
  sessionStorage.setItem('token', token)
}

function destroyToken() {
  sessionStorage.removeItem('token')
}

function redirect(url) {
  window.location.href = url
}
