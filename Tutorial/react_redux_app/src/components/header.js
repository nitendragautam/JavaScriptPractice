import React, {Component } from 'react';


/*
Creating a Header Class and binding to a React 
This header components is a class based components 

*/


class Header  extends Component {
    //Catches the event that changes in browser
    inputChange(event){
        console.log(event.target.value)
    }
    
    
    render(){
/*class is a reserverd word in 'JSX' ,so instead of class we use className in Jsx    
 onClick={()=>console.log('clicked')  :This will print 'clicked' on console when someone clicks on Logo
 onChange={this.inputChange}  : This will call inputChange() function when new letter is styped in Search Bar 
 
 'this' KeyWord will help to look for inputChange() function in the current Class .Withouth the useof this Key word React will throw Error
     
     
     */
        return (
        <header>
            
            <div className ="logo"
            onClick={()=>console.log('clicked')}
            >Logo</div>
            <input onChange={this.inputChange}/>
            </header>
        )
    }
}




export default Header;





/*
const Header = () => {
    
    return <div>Header for Page</div>
}

//React components  needs to be connected to main components
//so that it is accessible from other components .To do that we use export 

//It means that Header is exported to all the application



*/


