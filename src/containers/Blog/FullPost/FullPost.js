import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };

    componentDidMount() {
        console.log(this.props.match.params.id)
        /** If we simply update the state here, the FullPost component will be updated and componentDidUpdate() 
         * will run again. By this, our app will get into infinite loop. Therefore,
         * 1. First, we will check whether or not we got a id prop
         * 2. Then the loadedPost in the state must be null initially
         * 3. Also, if trying to load the same post which is already loaded, no need to make a req
        */
        if (this.props.match.params.id)
            if (!this.state.loadedPost || (this.state.loadedPost && this.props.match.params.id !== this.state.loadedPost.id))
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    })
                    .catch(err => console.error(err))
    };

    deletePostHandler = (postId) => {
        console.log('delete post ' + postId);
        axios.delete('/posts/' + postId)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    };

    render() {
        let post = <p style={{ 'textAlign': 'center' }} > Please select a post! </p>
        if (this.props.match.params.id) {
            post = <p style={{ 'textAlign': 'center' }} > Loading.... </p>
        }
        /** Loading the post and setting it to state would take some time. So, the post should only render when the state has been set completely */
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" 
                        onClick={() => this.deletePostHandler(this.state.loadedPost.id)}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;