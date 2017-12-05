import { combineReducers } from 'redux'

import {
    GET_COMMENT,
    ALL_COMMENTS,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actions/comments'

import {
    GET_POST,
    GET_ALL_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    VOTE_ON_POST,
    SORT_POSTS_BY_UPVOTE,
    SORT_POSTS_BY_DOWNVOTE,
    SORT_POSTS_BY_TIME,
    GET_CATEGORIES,
    CATEGORY_POSTS
} from '../actions/post'

function posts(state = {}, action) {
    const {} = action
    switch (action.type) {
        case GET_POST:
            return {
                ...state
            }

        case GET_ALL_POSTS:
            return {
                ...state
            }
        case ADD_POST:
            return {
                ...state
            }
        case EDIT_POST:
            return {
                ...state
            }
        case DELETE_POST:
            return {
                ...state
            }
        case CATEGORY_POSTS:
            return {
                ...state
            }
        default:
            return state

    }
}

function comments(state = {}, action) {

    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state
            }
        case ALL_COMMENTS:
            return {
                ...state
            }
        case EDIT_COMMENT:
            return {
                ...state
            }
        case DELETE_COMMENT:
            return {
                ...state
            }
        default:
            return state
    }
}

function sort(state = {}, action) {
    const {} = action
    switch (action.type) {
        case SORT_POSTS_BY_UPVOTE:
            return {

            }
        case SORT_POSTS_BY_DOWNVOTE:
            return {

            }
        case SORT_POSTS_BY_TIME:
            return {

            }
        default:
            return state
    }
}

function vote(state = {}, action) {
    const { post, type } = action
    switch (action.type) {
        case VOTE_ON_POST:
            return {
                ...state,
                [post.id]: post
            }
        default:
            return state
    }
}


function categories(state = {}, action) {
    const {} = action

    switch (action.type) {
        case GET_CATEGORIES:
            return {

        }
        default:
            return state

    }
}

export default combineReducers({
    posts,
    comments,
    sort,
    vote,
    categories,
})