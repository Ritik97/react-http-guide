import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div>
                <header className='Nav'>
                    <ul>
                        <li> <NavLink to='/posts'>Posts</NavLink> </li>
                        <li> <NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?edit=true'
                        }}>New Post</NavLink> </li>
                    </ul>
                </header>
                {/* <Route path='/home' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h2>New Post</h2>} /> */}
                
                <Switch>
                <Route path='/new-post' component={NewPost} />
                <Route path='/posts' component={Posts} />
                </Switch>
            </div>
        );

    };
}

export default Blog;