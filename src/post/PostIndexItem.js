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
                    <Link to={`/posts/${this.props.id}`}>Show</Link>
                    <Link to={`/posts/${this.props.id}/edit`}>Edit</Link>
                    Delete
                </td>
            </tr>
        )
    }
}

export default PostIndexItem;
