import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {

	render(){
		const { categories } = this.props
		return (
	        <div className="col-md-3">
	            <div className="add-post">
	                <button className="add-post-button btn btn-lg btn-primary btn-block">
	                    Add Post
	                </button>
	            </div>
	            <div className="categories">
	                <p className="categories-main-title">Categories</p>
	                <ul>
	                {categories.map((category, index) => (
	                	<li key={index}>

	                    {category.name}

	                   	</li>
	                    ))}
	                </ul>
	            </div>
	        </div>
        )
    }
}

export default Categories