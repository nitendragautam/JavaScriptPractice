
var React = require('react');
var ReactDOM = require('react-dom');


/*
Create a element of type 
First Element :type of Element we want to create
Second Element :attribute or property of element 
Third Element : child 

//var App = React.createElement('h1',null,'Hello World');


/*

var App = <h1> Hello World </h1>;
ReactDOM.render(
    App,
    document.getElementById('root')
);
*/

/*
List of Fruits 
var App= (
    <ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
    </ul>    
);


*/




/*
function is  reserverd word in React Js  
Components defining function needs to be started from Capital Letter
variables can be started using smaller letter 

*/

var Component = function() {
  
    return (
        <h1>Hello World </h1>
    );
};

/*We need to tell react to take our react element(App) and display it on the webpage using DOM

//ReactDOM.render([What],[Where]);
//React Component return some JSX ,that are react Elements 

//Below Shows different way of creating Element
ReactDOM.render(
    App,
    document.getElementById('root')
);

ReactDOM.render(
    React.createElement(Component),
    document.getElementById('root')
);

ReactDOM.render(
    <Component></Component>,
    document.getElementById('root')
);

ReactDOM.render(
    <Component />,
    document.getElementById('root')
);

*/


ReactDOM.render(
    <Component />,
    document.getElementById('root')
);