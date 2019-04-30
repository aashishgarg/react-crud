import React, {Component} from 'react'
import axios from 'axios'

class PostShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            subject: '',
            content: ''
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:4000/posts/' + this.props.match.params.id + '.json'
        }).then((res) => {
            const post = res.data;
            this.setState({
                id: res.data.id,
                title: res.data.title,
                subject: res.data.subject,
                content: res.data.content
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (
            <div className='page-header'>
                <div className="jumbotron">
                    <h1>Post</h1>
                    Title: <p>{this.state.title}</p>
                    Subject: <p>{this.state.subject}</p>
                    Content: <p>{this.state.content}</p>
                </div>
            </div>
        )
    }
}

export default PostShow;