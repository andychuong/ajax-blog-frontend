let editId

document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://andy-ajax-blog.herokuapp.com/blogpost')
    .then(response => {
      // handle success
      let postDiv = document.getElementById('postsDiv')
      for (let i = response.data.length-1; i > 0; i--) {
        // Post
        let post = document.createElement('div')
        post.className = "post"

        // Title
        let title = document.createElement('h2')
        title.className = "postTitle"
        title.innerText = response.data[i].title

        // Date
        // console.log(response.data[i].created_at)
        let date = document.createElement('span')
        date.className = 'postDate'
        date.innerText = response.data[i].created_at.substring(0,10)

        // Content
        let content = document.createElement('div')
        content.className = 'postContent'
        content.innerText = response.data[i].content

        // Edit Button
        let edit = document.createElement('a')
        // edit.href=`/edit/?id=${response.data[i].id}`
        edit.innerHTML = `<i class="material-icons" data-id=${response.data[i].id}>edit</i>`
        edit.setAttribute('data-id', response.data[i].id)
        edit.href = "#"
        edit.className = "editButton"

        edit.addEventListener('click', (ev) => {
          ev.preventDefault()
          let recordId = ev.target.getAttribute('data-id')

          let editTitle = document.getElementById('editTitle')
          let editContent = document.getElementById('editContent')
          editId = recordId
          axios.get(`https://andy-ajax-blog.herokuapp.com/blogpost/${recordId}`)
            .then(response => {
              console.log(response.data)
              editTitle.value = response.data[0].title
              editContent.value = response.data[0].content
            })
            .catch(error => {
              // handle error
              console.log(error);
            })

          showEdit()
        })

        // Delete Button

        let del = document.createElement('a')
        del.href="#"
        del.innerHTML = `<i class="material-icons" data-id=${response.data[i].id}>delete_forever</i>`
        del.setAttribute('data-id', response.data[i].id)
        del.addEventListener('click', (ev) => {
          ev.preventDefault()
          let recordId = ev.target.getAttribute('data-id')

          // DELETE THIS RECORD!
          axios.delete(`https://andy-ajax-blog.herokuapp.com/blogpost/${recordId}`)
            .then((response) => {
              console.log(response)
              ev.target.parentElement.parentElement.remove()
            })
            .catch((err) => {
              console.log(err)
            })
        })

        post.appendChild(title)
        post.appendChild(date)
        post.innerHTML += `<br><br>`
        post.appendChild(content)
        post.innerHTML += `<br>`
        post.appendChild(edit)
        post.appendChild(del)
        postDiv.appendChild(post)
      }
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
})
