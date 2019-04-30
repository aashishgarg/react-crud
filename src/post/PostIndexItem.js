import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostIndexItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.content}</td>
                <td>
                    <span><Link to={`/posts/${this.props.id}`}>Show</Link></span> | <span><Link to={`/posts/${this.props.id}/edit`}>Edit</Link></span> | <span>Delete</span>
                </td>
            </tr>
        )
    }
}

export default PostIndexItem;
