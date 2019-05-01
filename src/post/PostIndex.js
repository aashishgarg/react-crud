import React, {Component} from 'react'
import PostIndexItem from './PostIndexItem';
import axios from 'axios';

class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    deletePost = (rowId) => {
        axios.delete(`http://localhost:4000/posts/${rowId}.json`)
            .then((res) => {
                const posts = this.state.posts.filter((row) => row.id !== rowId);
                this.setState({posts: posts});
            }).catch((e) => {
                console.error(e);
        });

    };

    sortBy = (key) => {
        let posts = [...this.state.posts];
        posts.sort(this.compareBy(key));
        this.setState({posts: posts});
    };

    compareBy = (key) => {
        return function(a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    };

    componentDidMount() {
        axios.get('http://localhost:4000/posts.json').then(res => {
            const posts = res.data;
            this.setState({posts});
        })
    }

    render() {
        const posts = this.state.posts.map((postData) =>
            <PostIndexItem deletePost={this.deletePost} key={postData.id} {...postData} />);

        return (
            <div className='row'>
                <div>
                    <h1>All Posts</h1>
                </div>
                <table className='table table-striped table-hover'>
                    <thead>
                    <tr>
                        <th onClick={() => this.sortBy('title')}>Title</th>
                        <th onClick={() => this.sortBy('subject')}>Subject</th>
                        <th onClick={() => this.sortBy('content')}>Content</th>
                        <th>#</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        posts
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PostIndex;