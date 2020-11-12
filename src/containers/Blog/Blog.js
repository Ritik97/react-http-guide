import React, { Component } from 'react';
//import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div>
                <header className='Nav'>
                    <ul>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?edit=true'
                        }}>New Post</Link> </li>
                    </ul>
                </header>
                {/* <Route path='/home' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h2>New Post</h2>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
            </div>
        );

    };
}

export default Blog;