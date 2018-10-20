document.addEventListener('DOMContentLoaded', () => {
  handleEditSubmit()
  function handleEditSubmit() {
    console.log('edit')
    let form = document.getElementById('editPost')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()

      // grab all values from the form
      let postData = {}
      let formElements = ev.target.elements
      console.log(formElements)

      for (var i = 0; i < formElements.length; i++) {
        let inputName = formElements[i].name
        if (inputName) {
          postData[inputName] = formElements[i].value
        }
      }

      console.log('postData', postData);
      // AXIOS POST
      axios.patch(`https://andy-ajax-blog.herokuapp.com/blogpost/${editId}`, postData)
        .then((response) => {
          console.log(response)
          location.href = './'
        })
        .catch((error) => {
          console.log(error)
        })

    })
  }
})
