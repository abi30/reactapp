

import React ,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchSavedBlogs,fetchblogs } from "../../features/blogs/blogsSlice";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { isSavedToggle,sortBy } from "../../features/filter/filterSlice";




export default function SortFilter() {

  const dispatch = useDispatch();
  
  const { sort } = useSelector((state) => state.filter);
  const {isFilter} = useSelector((state) => state.blogs);

  const [input, setInput] = useState(sort);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSortBySaved = () => {
    dispatch(fetchSavedBlogs());
  };
  const handleSortByAll = () => {
    dispatch(fetchblogs());
  };
  
  const handleSortChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    console.log(input);
    dispatch(sortBy(input));
    // You can also dispatch an action to update the state in Redux

    if (!match) {
      navigate("/");
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sortBy(input));

    // if user is not in home page, redirect to home page
    if (!match) {
        navigate("/");
    }
};



  
  
  
    // useEffect(()=>{
    //   disPatch(fetchSavedBlogs());
    // },[disPatch]);


    return (
        <aside>
          <div className="sidebar-items">
            <div className="sidebar-content">
              <h4>Sort</h4>
              <select
                name="sort"
                id="lws-sort"
                onChange={handleSortChange}
                // onChange={(e) => setInput(e.target.value)}
                value={input}
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





    


