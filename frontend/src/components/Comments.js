import React, { Component } from 'react'
import Comment from './Comment'
import * as ReadableApi from '../utils/ReadableApi'


class Comments extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        this.fetchComments(this.props.postId)
    }

    fetchComments = (postId) => {
        ReadableApi.getAllCommentsForSpecificPost(postId).then((comments) => {
        this.setState({ comments })

    })
}
	render(){
        const { postId } = this.props
		return (
            <div className="comments col-md-12">
                <div className="comment-title">
                    <h4>Comments</h4>
                </div>
                
                <Comment
                    comments= { this.state.comments }
                />
                <button className="btn btn-outline-primary add-comment-button">Add Comment</button>
            </div>
        )
    }
}

export default Comments