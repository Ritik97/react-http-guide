import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost'

class Posts extends Component {

    state = {
        posts: []
    };

    showFullPostHandler = (postID) => {
        /**Navigation btw pages works like a stack where the page on the top of the stack
         * is always displayed. So, we will push the component with path '/postid. The PostID will be passed
         * as a part of URL which could be extracted in FullPost component as this.props.match.params.id. Then,
         * the get req can be made there with that ID, to get that single post. */
        this.props.history.push('/posts/' + postID);
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;