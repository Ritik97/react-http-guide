import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render() {

        return (
            <div>
                <header className='Nav'>
                    <ul>
                        <li> <NavLink exact to='/'>Home</NavLink> </li>
                        <li> <NavLink exact to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?edit=true'
                        }}>New Post</NavLink> </li>
                    </ul>
                </header>
                {/* <Route path='/home' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h2>New Post</h2>} /> */}
                <Route path='/' exact component={Posts} />
                <Switch>
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/:id' component={FullPost} />
                </Switch>
            </div>
        );

    };
}

export default Blog;