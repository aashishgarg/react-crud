import React, {Component} from 'react'
import PostItem from './PostItem';
import axios from 'axios';

class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        axios.get('http://localhost:4000/posts.json').then(res => {
            const posts = res.data;
            this.setState({posts});
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>All Posts</h1>
                </div>
                {
                    this.state.posts.map((post, index) =>
                        <PostItem
                            title={post.title}
                            subject={post.subject}
                            content={post.content}
                            key={post.id}
                            index={index}
                            id={post.id}
                        />)
                }
            </div>
        )
    }
}

export default AllPost;