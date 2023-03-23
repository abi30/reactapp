import React from "react";
import { Link } from "react-router-dom";
import BlogTags from "./BlogTags";
export default function BlogGridItem({blog={}}) {
const {id,title,description,image,tags,likes,isSaved,createdAt} = blog;

let savedContent;
if(isSaved===true){
 savedContent = <div className="flex gap-2 mt-4">
         <span className="lws-badge">Saved</span>
</div>
}else{
  savedContent=<></>;
}
  return (
    <div className="lws-card">
      <Link  to={`/blogs/${id}`}>
        <img
          src={image}
          className="lws-card-image"
          alt={title}
        />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link  to={`/blogs/${id}`} className="lws-postTitle">
         {title}
        </Link>
        <BlogTags tags={tags}/>
        
        {savedContent}
        {/* <!-- Show this element if post is saved --> */}
        {/* <div className="flex gap-2 mt-4">
          <span className="lws-badge">{isSaved===true?"Saved":"not Save"}</span>
        </div> */}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
}
