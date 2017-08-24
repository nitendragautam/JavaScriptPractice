import React from 'react';

//Whenever data is passed through child components ,it is passed as props
//When we want to extract these value we need to extract through props 
//Here we make reference to item inside props and directy use it 
const NewsItem = ({item}) => {
    return (
    
        <div className="news_item">
        <h3>{item.title}</h3>
         <div>
             {item.feed}
         </div>
        </div>
    )
    
    
}

//Exporting the the News Item List 
export default NewsItem;