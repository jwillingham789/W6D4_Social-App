//signout
document.getElementById('signout').addEventListener('click', function (){
  sessionStorage.removeItem('api_token')
  redirect('/index.html')
})

// fetchApi('GET','/timeline', {}, function (response, statusCode) {
//   //updating profile info
//   document.getElementById('profileAvatar').setAttribute('src', response.avatar)
//   document.getElementById('profileUsername').innerHTML = response.username
//   document.getElementById('followers').innerHTML = response.followers_count
//   document.getElementById('following').innerHTML = response.followees_count
//
//   response.timeline_posts.forEach(function(result){
//       var finalPost = document.createElement('div')
//       finalPost.classList.add('thumbnail')
//
//       //LEFT CONTAINER
//       var leftContainer = document.createElement('div')
//       leftContainer.classList.add('leftContainer')
//       var userImage = document.createElement('img')
//       userImage.setAttribute('src', result.user.avatar)
//       userImage.classList.add('profileImg')
//
//       //RIGHT CONTAINER
//       var rightContainer = document.createElement('div')
//       rightContainer.classList.add('rightContainer')
//       var nameIconContainer = document.createElement('div')
//       nameIconContainer.classList.add('nameIconContainer')
//       var nameContainer = document.createElement('div')
//       nameContainer.classList.add('nameContainer')
//       var username = document.createElement('h3')
//       username.innerHTML = result.user.username
//
//       var bodyContainer = document.createElement('div')
//       bodyContainer.classList.add('bodyContainer')
//       var createdText = document.createElement('h5')
//       createdText.innerHTML = result.created_at
//       var bodyText = document.createElement('p')
//       bodyText.innerHTML = result.body
//
//       //leftContainer
//       leftContainer.appendChild(userImage)
//
//       //right container
//       //nameIcon container
//       nameContainer.appendChild(username)
//       nameIconContainer.appendChild(nameContainer)
//       bodyContainer.appendChild(createdText)
//       bodyContainer.appendChild(bodyText)
//       rightContainer.appendChild(nameIconContainer)
//       rightContainer.appendChild(bodyContainer)
//
//       //thumbnail
//       finalPost.appendChild(leftContainer)
//       finalPost.appendChild(rightContainer)
//
//       document.getElementById('post').appendChild(finalPost)
//   })
// })

$(document).ready(function(){
  $("#saturn").planetarium({
     autospin: "3000ms",
     angle: "30deg",
     glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
     pattern: "js/plug-ins/Planet/img/texture-saturn.jpg",
     size: "60x60",
     float: true,
     space: "body",
     ring: false,
     ringColor: "#d6f691",
     ringAngle: "20deg"
   })
  $("#earth").planetarium({
     autospin: "5000ms",
     angle: "-20deg",
     glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
     pattern: "js/plug-ins/Planet/img/texture-earth.jpg",
     size: "50x50",
     float: true,
     space: "body",
     ring: false,
     ringColor: "#fff",
     ringAngle: "20deg"
   })
   $("#jupiter").planetarium({
      autospin: "7000ms",
      angle: "0deg",
      glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
      pattern: "js/plug-ins/Planet/img/texture-jupiter.jpg",
      size: "70x70",
      float: true,
      space: "body",
      ring: true,
      ringColor: "#95845c",
      ringAngle: "20deg"
    })
    $("#uranus").planetarium({
       autospin: "2000ms",
       angle: "-40deg",
       glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
       pattern: "js/plug-ins/Planet/img/texture-uranus.jpg",
       size: "60x60",
       float: true,
       space: "body",
       ring: false,
       ringColor: "#b501ff",
       ringAngle: "80deg"
     })
     $("#neptune").planetarium({
        autospin: "10000ms",
        angle: "-30deg",
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
        pattern: "js/plug-ins/Planet/img/texture-neptune.jpg",
        size: "40x40",
        float: true,
        space: "body",
        ring: false,
        ringColor: "#de1b1b",
        ringAngle: "20deg"
      })
      $("#pluto").planetarium({
         autospin: "2000ms",
         angle: "70deg",
         glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
         pattern: "js/plug-ins/Planet/img/texture-pluto.jpg",
         size: "50x50",
         float: true,
         space: "body",
         ring: false,
         ringColor: "#09a362",
         ringAngle: "-40deg"
       })
       $(".planet:has(div) > div").addClass("center-block")
 })
