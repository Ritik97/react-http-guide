import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = this.props.id === null ? <p style={{'textAlign': 'center'}}>Please select a Post!</p> :
         (
            <div className="FullPost">
                <h1>Titile</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;