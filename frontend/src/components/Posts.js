import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {

	render(){
		const { posts} = this.props
		return (
				<div>
				<div className="header">
		            <p>React Redux Readable</p>
		        </div>
               <div className="col-md-9">
                    <div className="posts">
	                    <div className="sorter pull-right">
	                       <p>Sort Posts By: <a> time</a><a>votes</a></p>
	                    </div>
				        	<Post 
				        	posts= { posts }  
				        	/>
		        	</div>
		        </div>
            </div>
        )
    }
}

export default Posts