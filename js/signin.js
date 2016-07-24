document.getElementById('btnSignIn').addEventListener('click', function () {
  var formFields = {
    email: document.getElementById('emailSignIn').value,
    password: document.getElementById('passwordSignIn').value
  }

  fetchApi('POST', '/login', formFields, function (response, statusCode) {
    console.log(response)
    if (statusCode >= 200 && statusCode < 300) {
      saveToken(response.api_token)
      redirect('/timeline.html')
    }
    else {
      alert(response.error)
      redirect('/index.html')
    }
  })
})
$(document).ready(function(){
  $("#saturn").planetarium({
     autospin: "3000ms",
     angle: "30deg",
     glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
     pattern: "http://www.thepetedesign.com/demos/planetarium/texture-saturn.jpg",
     size: "200x200",
     float: true,
     space: "body",
     ring: true,
     ringColor: "#d6f691",
     ringAngle: "20deg"
   })
   $("#saturn:has(div) > div").addClass("center-block")
  //  document.getElementById('saturn').childElement.classList.add('center-block')
  $("#earth").planetarium({
     autospin: "5000ms",
     angle: "-20deg",
     glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
     pattern: "http://www.thepetedesign.com/demos/planetarium/texture-earth.jpg",
     size: "100x100",
     float: true,
     space: "body",
     ring: false,
     ringColor: "#fff",
     ringAngle: "20deg"
   })
 })
