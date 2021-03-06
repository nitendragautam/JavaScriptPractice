import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Link} from 'react-router-dom';


//Import Components 
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';

class App extends Component {
    render () {
        
        return <div>Home</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
    <div>
    <header>
    {/*Links to the Different Routes */}
    <Link to="/">Home</Link><br/>
    <Link to="/posts">Posts</Link><br/>
    <Link to="/profile">Profile</Link>
    <hr/>
    </header>
    
    {/* Home Route with single forward slash "/" .
    We use exact key*/}
    <Route exact path ="/" component ={App}></Route>
    <Route path="/posts" component={Posts}></Route>
    <Route path="/profile" component={Profile}></Route>
    {/*Dynamic Route for Param,*/}
    <Route path="/posts/:id" component={PostsItem}></Route>
    </div>
    </BrowserRouter>
    ,document.querySelector('#root'))

