import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Player from "../components/description/Player";
import { Link, useParams } from "react-router-dom";
import BlogDescription from "../components/description/BlogDescription";
import RelatedBlogList from "../components/list/RelatedBlogList";
import { fetchBlog } from "../features/blog/blogSlice";
import Loading  from '../components/ui/Loading';
import Error  from '../components/ui/Error';

export default function Blog() {
  const dispatch = useDispatch();
  const {blogId} = useParams();
 
  const {blog,isLoading,isError,error}=useSelector(state=>state.blog);
  useEffect(()=>{
    dispatch(fetchBlog(blogId));
  },[dispatch,blogId]);

  const {id,tags } = blog || {};

  let content =null;
  if(isLoading){
    content = <Loading/>;
  }
  if(!isLoading && isError){
    content = <Error message={error} />;
  }

  if(!isLoading && !isError && !blog?.id){
    content =  <div className="col-span-12">No blog found !</div>;
  }

  if(!isLoading && !isError && blog?.id){
    content = <section className="post-page-container">
              <BlogDescription blog={blog}/>
              <RelatedBlogList currentBlogId={id} tags ={tags} />
  </section>; 
  }

  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      {/* <section className="post-page-container">
        <BlogDescription />
       
        <RelatedBlogList />
      </section> */}
      {content}
    </>
  );
}
