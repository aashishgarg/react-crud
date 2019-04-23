import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/posts/new'}>New Post</Link>
            </div>
        )
    }
}

export default Header;