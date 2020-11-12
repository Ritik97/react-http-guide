import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    };

    showFullPostHandler = (postID) => {
        console.log(postID);
        // const post = {...this.state.posts[index]}
        // console.log(post);
        this.setState({
            showFullPost: postID
        })
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4); //fetching data from index 0 to 4
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ritik'
                    }
                });
                this.setState({ posts: updatedPosts });
                console.log(response);
            })
            .catch(err => {
                /**Request don't always succedd. Therefore, we should have a way to handle it correctly. Either by 
                 * logging it, or by showing it on the UI
                */
                console.error(err);
                //this.setState({ error: true })
            })
    };

    render() {
        const posts = this.state.error ? <p style={{ 'textAlign': 'center' }}>Something Went Wrong!</p> :
            this.state.posts.map((post, index) => {
                return <Post key={post.id} title={post.title} author={post.author}
                    clicked={() => this.showFullPostHandler(post.id)} />
            })
        return (
            <section className="Posts">
            {posts}
        </section>
        )
    }
}

export default Posts;