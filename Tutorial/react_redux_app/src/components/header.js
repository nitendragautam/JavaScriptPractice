import React, {Component } from 'react';


/*
Creating a Header Class and binding to a React 
This header components is a class based components 

*/


class Header  extends Component {
    
    render(){
        
    //Defining Styles for Header Component     
  const headerStyles = {
      header : {
          background :'#03a9f4'
      },
      
      logo :{
          color:'#fff',
          fontFamily:'Anton',
          textAlign:'center'
      }
  }      
        
        
        return (
        <header style={headerStyles.header}>
            <div style={headerStyles.logo}>Logo</div>
            <input/>
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


