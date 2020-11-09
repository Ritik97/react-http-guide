import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

/** In Blog component, we will fetch the list of Posts from jsonplaceholder and render it. */
class Blog extends Component {

    state = {
        posts: [],
        showFullPost: null,
        error: false
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
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                this.setState({ error: true })
            })
    };

    render() {
        const posts = this.state.error ? <p style={{'textAlign' : 'center'}}>Something Went Wrong!</p> :
             this.state.posts.map((post, index) => {
            return <Post key={post.id} title={post.title} author={post.author} 
            clicked={() => this.showFullPostHandler(post.id)} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.showFullPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;