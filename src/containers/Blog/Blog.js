import React, { Component } from 'react';
//import axios from 'axios';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

/** In Blog component, we will fetch the list of Posts from jsonplaceholder and render it. */
class Blog extends Component {



    render() {


        return (
            <div>
                <header className='Nav'>
                    <ul>
                        <li> <a href='/home'>Home</a> </li>
                        <li> <a href='/new-post'>New Post</a> </li>
                    </ul>
                </header>
                {/* <Route path='/home' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h2>New Post</h2>} /> */}
                <Route path='/home' exact component={Posts} />
            </div>
        );
    }
}

export default Blog;