import React, {Component} from 'react';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            subject: '',
            content: ''
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            subject: this.props.subject,
            content: this.props.content,
        })
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <h1>Create Post</h1>
                </div>
                <hr size='30'></hr>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Email address:</label>
                            <input required type="text" onChange={this.titleChanged} placeholder="Enter Post Title"
                                   name="title"
                                   value={this.state.title} className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input required type="text" onChange={this.subjectChanged} placeholder="Enter Post subject"
                                   name="subject" value={this.state.subject} className="form-control" id="subject"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content:</label>
                            <textarea required rows="5" cols="28" placeholder="Enter Post"
                                      onChange={this.contentChanged}
                                      value={this.state.content} className="form-control" id="content"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;
