import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subject: ''
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.subjectChanged = this.subjectChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.url.indexOf('/new') === -1) {
            axios({
                method: 'GET',
                url: 'http://localhost:4000/posts/' + this.props.match.params.id + '.json'
            }).then((res) => {
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
    }

    titleChanged(e) {
        this.setState({
            title: e.target.value
        })
    }

    subjectChanged(e) {
        this.setState({
            subject: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:4000/posts.json',
            data: {
                post: {
                    title: this.state.title,
                    subject: this.state.title,
                    content: this.state.content
                }
            }
        }).then((res) => {
            this.props.history.push("/posts");
        })
    };

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" onChange={this.titleChanged} placeholder="Enter Post Title" name="title"
                           value={this.state.title}/><br/><br/><br/>
                    <input required type="text" onChange={this.subjectChanged} placeholder="Enter Post subject"
                           name="subject" value={this.state.subject}/><br/><br/><br/>
                    <textarea required rows="5" cols="28" placeholder="Enter Post"/><br/><br/><br/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm;