import {
	getCategories,
	getCategoryPosts,
	getPosts,
	getSpecificPost,
	newPost,
	editPost,
	deletePost,
	getAllCommentsForSpecificPost,
	newComment,
	getSpecificComment,
	editComment,
	deleteComment,
	voteOnPost
} from '../utils/ReadableApi.js'

export const GET_POST = 'GET_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'

export const SORT_POSTS_BY_UPVOTE = 'SORT_POSTS_BY_UPVOTE' 
export const SORT_POSTS_BY_DOWNVOTE = 'SORT_POSTS_BY_DOWNVOTE' 
export const SORT_POSTS_BY_TIME = 'SORT_POSTS_BY_TIME'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CATEGORY_POSTS = 'CATEGORY_POSTS'


export const getAllPosts = () => dispatch => (
	getPosts()
	.then(posts => posts.map(post => {
		getAllCommentsForSpecificPost(post.id)
		.then(comments => {
			dispatch({
				type: GET_ALL_POSTS,
				post: post,
				comments
			})
		})
	}))
)

export const getPost = (id) => 
	dispatch => {
		getSpecificPost()
		.then(post => getAllCommentsForSpecificPost(post.id)
		.then(comments => {
			dispatch({
				type: GET_POST,
				post: post,
				comments
			})
		}))
	}
	
export const addPost = () => 
	dispatch => {
		newPost()
		.then(post => {
			dispatch({
				type: ADD_POST,
				post
			})
		})
	}

export const editSinglePost = (post, id) => 
	dispatch => {
		editPost(id)
		.then(post => {
			dispatch({
				type: EDIT_POST,
				id,
				post
			})
		})
	}

export const deleteSinglePost = (id) => 
	dispatch =>	{
		deletePost(id)
		.then(() => {
			dispatch({
				type: DELETE_POST,
				id
			})
		})
	}

export const votePost = (postId, options) => dispatch => {
	return voteOnPost(postId, options)
		.then((post) => {
			console.log(post)
			dispatch({
				type: VOTE_ON_POST,
				post
			})
		})
	};		
	
export const sortPostByUpVote = () => {
		type: SORT_POSTS_BY_UPVOTE
	}
	
export const sortPostByDownVote = () => {
	type: SORT_POSTS_BY_DOWNVOTE
}

export const sortPostByTime = () => {
	type: SORT_POSTS_BY_TIME
}

export const getAllCategories = () => 
	dispatch => {
		getCategories()
		.then(categories => {
			dispatch({
				type: GET_CATEGORIES,
				categories
			})
		})
	}

export const postsForCategory = (category) => {
	dispatch => {
		getCategoryPosts(category)
		.then(posts => {
			dispatch({
				type: CATEGORY_POSTS,
				category,
				posts
			})
		})
	}
}