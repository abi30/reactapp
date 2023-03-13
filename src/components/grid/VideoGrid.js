
import VideoGridItem from './VideoGridItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchvideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';
import Error from '../ui/Error';

export default function VideoGrid() {
  const disPatch = useDispatch();
  const {videos,isLoading,isError,error}=useSelector(state=>state.videos);

  useEffect(()=>{
    disPatch(fetchvideos());
  },[disPatch]);

  //decide what to render 
  let content;
  if(isLoading){
    content = <Loading/>;
  }
  if(!isLoading && isError){
    content = <Error message={error} />;
  }
  if(!isLoading && !isError && videos?.length === 0){
    content =  <div className="col-span-12">No videos found !</div>;
  }
  if(!isLoading && !isError && videos?.length > 0){
    content = videos.map((video)=><VideoGridItem key={video.id} video={video}/>); 

  }
  return (
    // <!-- Video Grid -->
    <section className="pt-12">
    <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
         
         {content}

            {/* <VideoGridItem/> */}
           {/* <!-- error section --> */}
            {/* <div className="col-span-12">some error happened</div>  */}
        </div>
    </section>
</section>
  )
}
