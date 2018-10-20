document.addEventListener('DOMContentLoaded', () => {
  // Single Page App
  // Render States:
  // Normal View - Show most recent posts?
  // New View - Form for new posts
  // Edit View - Edit a post
  var postsDiv = document.getElementById('postsDiv')
  var newDiv = document.getElementById('newDiv')
  var editDiv = document.getElementById('editDiv')

  // Main
  let mainButton = document.getElementById('logo-container')
  mainButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    showMain()
  })

  // New
  let newButton = document.getElementById('newPostLink')
  newButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    showNew()
  })

  // Edit
  let editCollection = document.getElementsByClassName('editButton')
  console.log(editCollection)
  let editButtons = [...editCollection];
  console.log(editButtons)
  for (var i = 0; i < editButtons.length; i++) {
    console.log(editButtons[i])
    editButtons[i].addEventListener('click', (ev) => {
        ev.preventDefault()
        showEdit()
      })
  }
  // editButtons.forEach( (ele) => {
  //   ele.addEventListener('click', (ev) => {
  //     ev.preventDefault()
  //     showEdit()
  //   })
  // })

})

function showMain(){
  postsDiv.setAttribute("style", "display:inline");
  newDiv.setAttribute("style", "display:none");
  editDiv.setAttribute("style", "display:none");
}

function showNew(){
  postsDiv.setAttribute("style", "display:none");
  newDiv.setAttribute("style", "display:inline");
  editDiv.setAttribute("style", "display:none");
}

function showEdit(){
  postsDiv.setAttribute("style", "display:none");
  newDiv.setAttribute("style", "display:none");
  editDiv.setAttribute("style", "display:inline ");
  console.log('show edit')
}
