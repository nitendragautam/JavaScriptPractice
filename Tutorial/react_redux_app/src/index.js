import React from 'react';
import ReactDOM from 'react-dom';


//Import Header Components  inside Main Components
//No need to give .js in components as react will recognize it 
//To use Header Component we are importing Header component from header.js 

import Header from './components/header'

// React Component 
const App = () => {
    //we can wrap  <h1> tag or different element  inside small bracket ()
    //This returns Hello World with 
    return (<div>
            <Header/>
        <h1>Hello World</h1>
        </div>
            )
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


*/