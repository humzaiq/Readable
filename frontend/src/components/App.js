import React, { Component } from 'react';
import '../App.css';
import Posts from './Posts'
import Comments from './Comments'
import Categories from './Categories'
import * as ReadableApi from '../utils/ReadableApi'
import { Route, withRouter } from 'react-router-dom';

class App extends Component {

state = {
	posts: [],
	categories: []
}

componentDidMount(){
	this.getAllPosts()
	this.getAllCategories()
}

getAllCategories = () => {
	ReadableApi.getCategories().then((categories) => {
		this.setState({ categories })
	})
}

getAllPosts = () => {
	ReadableApi.getPosts().then((posts) => {
		this.setState({ posts })
	})	
}

  render() {
    return (
		<div className="container">
				<div>
						<Posts posts= {this.state.posts} 
						/>
						<Categories categories= {this.state.categories} 
						/>
					</div>
		</div>
    );
  }
}


export default App;
