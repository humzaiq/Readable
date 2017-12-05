const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

/* Categories related 
   api request */

//Get all the Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

//	Get all of the post for a particular category
export const getCategoryPosts = (category) =>
	fetch(`${api}/${category}/posts`, { headers })
	.then(res => res.json())

/* Posts related 
   api request */

//Get all posts
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
   .then(res => res.json())

//Get a specific post
export const getSpecificPost = (id) =>
	fetch(`${api}/posts/${id}`)
	.then(res => res.json())

//Add a new post
export const newPost = (post) => {
	fetch(`${api}/posts`, {
		method: 'POST',
		headers: { headers },
		body: JSON.stringify(post)
	})
	.then(data => data.json())
}

//Edit a post
export const editPost = (id, post) => {
	fetch(`${api}/posts/${id}`, {
		method: 'PUT',
		headers: { headers },
		body: JSON.stringify(post)
	})
	.then(data => data.json())
}

//Delete a post
export const deletePost = (id) => {
	fetch(`${api}/posts/${id}`, {
		method: 'DELETE',
		headers: { headers }
	})
}

export const voteOnPost = (postId, vote) => {
	return fetch(`${api}/posts/${postId}`, {
		method: 'POST',
		headers: headers ,
		body: JSON.stringify({option: vote})
	})
	.then(data => data.json())
	.catch(err => console.error(err))
}

/* Comments related 
    api request */


//Get all Comments for a specific post
export const getAllCommentsForSpecificPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())


//Add a new comment
export const newComment = (postId) =>
	fetch(`${api}/comments`, { headers })

//Get the details for a single Comment
export const getSpecificComment = (id) => 
	fetch(`${api}/comments/${id}`)
	.then(res => res.json())

//Edit a comment
export const editComment = (id, comment) =>
	fetch(`${api}/comments/${id}`, {
		method: 'PUT',
		headers: { headers },
		body: JSON.stringify(comment)
	})
	.then(data => data.json())

//Delete a comment
export const deleteComment = (id) => {
	fetch(`${api}/comments/${id}`, {
		method: 'DELETE',
		headers: { headers }
	})
}
	











