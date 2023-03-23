

import React ,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchSavedBlogs,fetchblogs } from "../../features/blogs/blogsSlice";
export default function SortFilter() {
  const disPatch = useDispatch();
  const {isFilter} = useSelector((state) => state.blogs);

  // useEffect(()=>{
  //   disPatch(fetchSavedBlogs());
  // },[disPatch]);
  const handleSortBySaved = () => {
    disPatch(fetchSavedBlogs());
  };
  const handleSortByAll = () => {
    disPatch(fetchblogs());
  };
    return (
        <aside>
          <div className="sidebar-items">
            <div className="sidebar-content">
              <h4>Sort</h4>
              <select
                name="sort"
                id="lws-sort"
                className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              >
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
              </select>
            </div>
            <div className="sidebar-content">
              <h4>Filter</h4>
              <div className="radio-group">
                {/* <!-- handle filter on button click --> */}
                <div>
                  <input
                    type="radio"
                    id="lws-all"
                    name="isFilter"
                    value="all"
                   checked={isFilter === 'all'}
                    onChange={()=>handleSortByAll()}
                    className="radio"
           
                  />
                  <label htmlFor="lws-all">All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="isFilter"
                    value="all"
                   checked={isFilter === 'saved'}
                  onChange={()=>(handleSortBySaved())}
                    className="radio"
                  />
                  <label htmlFor="lws-saved">Saved</label>
                </div>
              </div>
            </div>
          </div>
        </aside>
    );
};


