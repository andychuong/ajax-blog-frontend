document.addEventListener('DOMContentLoaded', () => {
  handleFormSubmit()
  function handleFormSubmit() {
    let form = document.getElementById('createPost')
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
      axios.post('https://andy-ajax-blog.herokuapp.com/blogpost', postData)
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
