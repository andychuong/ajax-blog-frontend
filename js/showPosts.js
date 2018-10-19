document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://andy-ajax-blog.herokuapp.com/blogpost')
    .then(response => {
      // handle success
      let postDiv = document.getElementById('postsDiv')
      for (let i = 0; i < response.data.length; i++) {
        // Post
        let post = document.createElement('div')
        post.className = "post"

        // Title
        let title = document.createElement('h2')
        title.className = "postTitle"
        title.innerText = response.data[i].title

        // Date
        // console.log(response.data[i].created_at.substring(0,10))
        let date = document.createElement('span')
        date.className = 'postDate'
        date.innerText = response.data[i].created_at.substring(0,10)

        // Content
        let content = document.createElement('div')
        content.className = 'postContent'
        content.innerText = response.data[i].content

        post.appendChild(title)
        post.appendChild(date)
        post.innerHTML += `<br><br>`
        post.appendChild(content)
        postDiv.appendChild(post)
      }
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
})
