import React, { Component } from 'react'
import * as ReadableApi from '../utils/ReadableApi'

class Comment extends Component {

render(){
    const { comments } = this.props
    console.log(comments)
	return (
            <div>
            {comments.map((comment, i) => (
            <div key={i} className="comment">
                <div className="comment-body">
                    <p>{comment.body}</p>
                </div>
                <div className="comment-buttons">
                    <a className="edit-comment-button">edit</a>
                    <a className="delete-delete-button">delete</a>
                </div> 
            </div>
            ))}
            </div>
        )
    }
}

export default Comment