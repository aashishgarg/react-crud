import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='row'>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={'/posts'} className="nav-link active">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/posts/new'} className="nav-link">New Post</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;