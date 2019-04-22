import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllPost from './post/AllPost';
import ShowPost from "./post/ShowPost";
import PostForm from "./post/PostForm";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={AllPost} />
                <Route path='/posts/:id' component={ShowPost}/>
                <Route path='/posts/:id' component={PostForm}/>
            </Router>
        );
    }
}

export default App;
