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
            <div>
                <div>
                    <div>Post Details</div>
                    <div>Title: {this.state.title}</div>
                    <div>Subject: {this.state.subject}</div>
                    <div>Content: {this.state.content}</div>
                </div>
            </div>
        )
    }
}

export default PostShow;