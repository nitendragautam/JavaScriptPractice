import React ,{ Component } from 'react';

class PostsItem extends Component {
    
    /* 
    Constructor is created to pass param values to this React
    Component
    */
    
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props);
        
        return <div>{this.props.match.params.id}</div>
    }
}

export default PostsItem;