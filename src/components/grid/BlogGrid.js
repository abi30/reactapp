
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BlogGridItem from './BlogGridItem'
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import {fetchblogs} from "../../features/blogs/blogsSlice";


export default function BlogGrid() {
  const disPatch = useDispatch();
  const {blogs,isLoading,isError,error}=useSelector(state=>state.blogs);

  useEffect(()=>{
    disPatch(fetchblogs());
  },[disPatch]);

  //decide what to render 
  let content;
  if(isLoading){
    content = <Loading/>;
  }
  if(!isLoading && isError){
    content = <Error message={error} />;
  }
  if(!isLoading && !isError && blogs?.length === 0){
    content =  <div className="col-span-12">No blogs found !</div>;
  }
  if(!isLoading && !isError && blogs?.length > 0){
    content = blogs.map((blog)=><BlogGridItem key={blog.id} blog={blog}/>); 

  }
  return (
    <main className="post-container" id="lws-postContainer">
    {/* <BlogGridItem /> */}
    {content}
  </main>

  )
}

