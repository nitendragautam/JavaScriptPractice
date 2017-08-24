import React from 'react';
import NewsItem from './news_list_items';


//Functional based comonents 

/* In this News List method */
const newsList =(props) => {
    //Create a Variable that will iterate through the Json Items
    
  //Maps Let to iterate through the JSON Elements   //We are mapping each Json element as item
    
    const items = props.news.map((item)=>{
        
       {/* Importing Child component NewsItem from news_list_items*/} 
        return (
            
        <NewsItem key={item.id} item ={item}/>
        
        )
    })
    
    return (
        //Making reference to ietms Constant 
    <div>
       {items}
        
        </div>
    )
}


export default newsList;