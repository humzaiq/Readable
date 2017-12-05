import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
import { timestampToDate } from '../utils/helper'
import { votePost } from '../actions/post'

class Post extends Component {

    render(){
        const { posts, handleVote } = this.props

        return (
            <div className='row'>
            {posts.map((post, id ) => (
                <div key={id} className="post">
                    <div className="vote-panel col-md-1">
                        <span onClick={() => {handleVote(post.id, "upVote")}} className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                        <div className="vote-count">
                            <p>{post.voteScore}</p>
                        </div>
                        <div className="vote-buttons">
                            <span onClick={() => {handleVote(post.id, "downVote")}} className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="post-panel col-md-11">
                        <div className="post-title">
                            <p>{post.title} </p>
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        <div>
                            <div className="author-info">
                                <p>Written By:
                                    <span className="author-name"> { post.author }</span> published at 
                                    <span className="publish-time"> {timestampToDate(post.timestamp)}</span>.
                                </p>
                            </div>
                            <div className="post-edit-buttons pull-right">
                                <a className="edit-post">edit</a>
                                <a className="delete-post">delete</a>
                            </div>
                        </div>
                    </div>
                    <Comments 
                        postId = { post.id }
                    />
                </div>
            ))}         
        </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return {
    handleVote: (postId, options) => dispatch(votePost(postId, options))
    }
}

export default connect(null, mapDispatchToProps) (Post)