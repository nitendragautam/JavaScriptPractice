import React, {Component } from 'react';
import ReactDOM from 'react-dom';


//Import Header Components  inside Main Components
//No need to give .js in components as react will recognize it 
//To use Header Component we are importing Header component from header.js 

import Header from './components/header'
import JSON from './db.json';
import NewsList from './components/news_list';


// React Class based Components 
//Since we are loading JSON ,we need to keep in the state so that it loads during application starts
//That's why we are using class based components rather than functional component
//So Class base components is used in React when we have to use state and load some property 


class App extends Component {
    constructor(props){
        
        super(props);
        
        this.state ={
            news:JSON, //News State has all the news which is not mutable 
            filtered:JSON  //Filtered state can be mutable when changed according to keyword search 
        }
    }
    
    //When we use filter we need to return something
    filterNews(keywords){
       let filtered =this.state.news.filter((item)=>{
           return item.title.indexOf(keywords) > -1;
       })
       
       //Setting the ressult for fileterd 
       this.setState({filtered:filtered})
       
    }
    
    render() {
        return (
        <div>
            <Header newsSearch={keywords =>this.filterNews(keywords)}/>
           {/* When Calling NewsList Component we are passing the JSON Data so that we can write 
           functions in NewsList Component to Display Json*/}
            <NewsList news ={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>,
               document.querySelector('#root'));


/*
This is the main component in which we can import other 
components 

Two main components in React :

(a)Functional Component 
(b) React Component 

Functional component does not care about what happens to other components with the application 

Class Component : It has the ability to know what happending with rest of the application

React provides two methods for styling elements .They 
are inline method and import method 


React does not allows to interacts with browser DOM directly .code needs to go through React to interact with DOM


//State in React 
If we want to change the state in React JS we need tod do that with the help of this.serState() method
*/