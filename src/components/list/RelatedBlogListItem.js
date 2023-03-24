import React from 'react'
import {Link} from 'react-router-dom'

export default function RelatedBlogListItem({blog}) {
  // console.log(blog);
  const {id,title,tags,image,createdAt}=blog||{};

  let tagContent =null;
  if(tags?.length > 0){
    tagContent = tags.map((tag,index)=> <span key={`tag-${index}`}>#{tag} </span>); 
  }
  return (
//    <!-- single related video --> 
<div className="card">
<Link to={`/blogs/${id}`}>
  <img src={image} className="card-image" alt={title} />
</Link>
<div className="p-4">
  <Link to={`/blogs/${id}`}  className="text-lg post-title lws-RelatedPostTitle">
    {title}
  </Link>
  <div className="mb-0 tags">
  {tagContent}
  </div>
  <p>{createdAt}</p>
</div>
</div>
  )
}
