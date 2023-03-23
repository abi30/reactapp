import React from "react";
import SortFilter from "../components/grid/SortFilter";
import BlogGrid from "../components/grid/BlogGrid";


export default function Home() {
  return (
   
      <section className="wrapper">
      <SortFilter/>
        {/* <!-- posts container  --> */}
        <BlogGrid />
        {/* <!-- posts container ends --> */}
      </section>
 
  );
}
