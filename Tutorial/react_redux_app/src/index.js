import React from 'react';
import ReactDOM from 'react-dom';


//Import Components Header
//No need to give .js in components as react will recognize it 

import Header from './components/header'
// React Component 
const App = () => {
    return (
        <h1>Hello World</h1>
        )
}


ReactDOM.render(<App/>,
               document.querySelector('#root'));