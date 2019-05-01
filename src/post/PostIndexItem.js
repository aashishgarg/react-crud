import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PostIndexItem.css'

const PostIndexItem = ({id, title, subject, content, deletePost}) => (
    <tr>
        <td>{title}</td>
        <td>{subject}</td>
        <td>{content}</td>
        <td>
            <span><Link to={`/posts/${id}`}>Show</Link></span>|
            <span><Link to={`/posts/${id}/edit`}>Edit</Link></span>|
            <span><button onClick={() => deletePost(id)}>Delete</button></span>
        </td>
    </tr>
);

export default PostIndexItem;