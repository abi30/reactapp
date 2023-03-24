

import React ,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchblogs } from "../../features/blogs/blogsSlice";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { isSavedToggle,sortBy } from "../../features/filter/filterSlice";




export default function SortFilter() {
  const match = useMatch("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sort, filterBySave} = useSelector((state) => state.filter);

  const [input, setInput] = useState(sort);

  

  // const handleSortBySaved = () => {
  //   dispatch(fetchSavedBlogs());
  // };
  const handleSortByAll = (filterBySave) => {
    dispatch(isSavedToggle(filterBySave));
  };

  const handleSortChange = (event) => {
    event.preventDefault();
    const selectedSort = event.target.value;
    setInput(selectedSort);
    dispatch(sortBy(selectedSort));
  
    if (!match) {
      navigate("/");
    }
  };



    return (
        <aside>
          <div className="sidebar-items">
            <div className="sidebar-content">
              <h4>Sort</h4>
              <select
                name="sort"
                id="lws-sort"
                value={input}
                onChange={handleSortChange}
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
                   checked={filterBySave === false}
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
                   checked={filterBySave === true}
                  onChange={()=>(handleSortByAll())}
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





    


