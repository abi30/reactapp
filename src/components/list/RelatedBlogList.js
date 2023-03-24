import React, { useEffect } from "react";
import RelatedBlogListItem from "./RelatedBlogListItem";
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";

import { useDispatch, useSelector } from "react-redux";
export default function RelatedBlogList({currentBlogId, tags }) {
  // console.log({ currentBlogId, tags });
  const dispatch = useDispatch();
  const { relatedBlogs,isLoading,isError,error}=  useSelector(state=>state.relatedBlogs);
 
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch,tags,currentBlogId]);


  let content =null;

  if(isLoading){
    content = <Loading/>;
  }
  if(!isLoading && isError){
    content = <Error message={error} />;
  }

  if(!isLoading && !isError && relatedBlogs?.length === 0){
    content =  <div className="col-span-12">No relatedvideos found !</div>;
  }
  if(!isLoading && !isError && relatedBlogs?.length > 0){
    content = relatedBlogs.map((blog)=>{
      // console.log(blog.id);
    return <RelatedBlogListItem key={blog.id} blog={blog}/>}); 

  }
 

  return (
   
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {/* <div className="card">
          <a href="post.html">
            <img src="./images/git.webp" className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
              Top Github Alternatives
            </a>
            <div className="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2010-03-27</p>
          </div>
        </div> */}
        {content}
        {/* <RelatedBlogListItem/> */}
      </div>
    </aside>
  );
}
