import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PostNew from "./post/PostNew";
import PostIndex from "./post/PostIndex";
import PostShow from "./post/PostShow";
import Header from "./common/header";
import Footer from "./common/footer";
import PostEdit from "./post/PostEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path='/' exact component={PostIndex}/>
                    <Route path='posts' exact component={PostIndex}/>
                    <Route path={`/posts/new`} exact component={PostNew}/>
                    <Route path={`/posts/:id(\\d+)`} exact component={PostShow}/>
                    <Route path={`/posts/:id(\\d+)/edit`} exact component={PostEdit}/>
                    <Redirect to='/'/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;
