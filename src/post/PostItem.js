import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostForm from "./PostForm";

class Post extends Component {
    render() {
        return (
            <div>
                {this.props.index} |
                {console.log(this.props)}
                Title: {this.props.title} - Subject: {this.props.subject} - Content: {this.props.content}
                |
                <Link to={`/posts/${this.props.id}`}>Show</Link>
                |
                <Link to={`/posts/${this.props.id}/edit`}>Edit</Link>
                |
                Delete
            </div>
        )
    }
}

export default Post;
