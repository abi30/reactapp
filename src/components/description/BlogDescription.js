import React from 'react'
import { useDispatch } from 'react-redux';
import { changeSaveStatus,likeBlog} from "../../features/blog/blogSlice";

export default function BlogDescription({blog}) {

  const {id, title,description,  image, tags,likes,isSaved,createdAt,} = blog || {};
  const dispatch = useDispatch();

  const handleLike=()=>{
    dispatch(likeBlog({id,currentLike:likes}));
  }

  const toggleSave = ()=>{
    dispatch(changeSaveStatus({id,isSaved:!isSaved}));
  };

  let content =null;
  if(tags?.length > 0){
    content = tags.map((tag,index)=> <span key={tag.index}>#{tag} </span>); 
  }
  return (
    <main className="post">
    <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
    <div>
      <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
      {title}
      </h1>

      <div className="tags" id="lws-singleTags">
      {content}
      </div>

        {/* <LikeSaved/> */}
        <div className="btn-group">
        {/* <!-- handle like on button click --> */}
          <button onClick={handleLike} className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i>{likes}
          </button>


          <button onClick={toggleSave} className={isSaved ? 'active save-btn' : 'save-btn'}  id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i>{isSaved ? 'saved' : 'save'}
          </button>
      </div>

      <div className="mt-6">
        <p>
          {description}
        </p>
        <p>
          {createdAt}
        </p>
      </div>
    </div>
  </main>
  )
}
