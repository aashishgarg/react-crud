import React, {Component} from 'react'
import PostIndexItem from './PostIndexItem';
import axios from 'axios';

class PostIndex extends Component {
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
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Content</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.posts.map((post, index) =>
                            <PostIndexItem
                                title={post.title}
                                subject={post.subject}
                                content={post.content}
                                key={post.id}
                                index={index}
                                id={post.id}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PostIndex;