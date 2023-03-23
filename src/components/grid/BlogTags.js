import React from 'react'
import Tag from './Tag';
export default function BlogTags({tags={}}) {

    let content;
    if (tags.length > 0) {
          content = tags.map((tag,index)=><Tag key={index} tag={tag}/>); 
    }
  return (

    <div className="lws-tags"> 
         {content}
        </div>
  )
}
