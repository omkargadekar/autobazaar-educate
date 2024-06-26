'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { blog_data } from "../../data";
import { fetchAllLatestBlogs } from "../../utils/funcs/api_func/blog";
import { FILE_BASE_URL } from "../../utils/constant";
import dayjs from "dayjs";

const latest_blog = blog_data.slice(0, 3);

const BlogSidebar = () => { 
  const [blogData, setBlogData] = useState([])

const fetchData =async()=>{
  const res = await fetchAllLatestBlogs();

  if(res?.status === 'success'){
    setBlogData(res?.data?.result)
  }
}

useEffect(() => {
  fetchData()
}, [])
console.log('blogData', blogData)
  return (
    <div className="edu-blog-sidebar">
      <div className="edu-blog-widget widget-search">
        <div className="inner">
          <h4 className="widget-title">Search</h4>
          <div className="content">
            <form className="blog-search" onSubmit={(e) => e.preventDefault()}>
              <button className="search-button">
                <i className="icon-2"></i>
              </button>
              <input type="text" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>

      <div className="edu-blog-widget widget-latest-post">
        <div className="inner">
          <h4 className="widget-title">Latest Post</h4>
          <div className="content latest-post-list">
            {blogData.map((blog) => (
              <div key={blog?.id} className="latest-post">
                <div className="thumbnail">
                  <Link href={`/blog-details/${blog?.id}`}>
                    <a>
                      <img   src={`${FILE_BASE_URL}/${blog?.image}`} alt="Blog Images" />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <h6 className="title">
                    <Link href={`/blog-details/${blog?.id}`}>
                      <a>{blog?.title.substring(0, 25)}...</a>
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <i className="icon-27"></i>
                      {dayjs(blog?.created_at).format('MMM DD YYYY')}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="edu-blog-widget widget-categories">
        <div className="inner">
          <h4 className="widget-title">Categories</h4>
          <div className="content">
            <ul className="category-list">
              <li>
                <a href="#">
                  Business Studies <span>(3)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Computer Engineering <span>(7)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Medical &amp; Health<span>(2)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Software <span>(1)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Web Development <span>(3)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Uncategorized <span>(9)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="edu-blog-widget widget-action">
        <div className="inner">
          <h4 className="title">
            Get Online Courses From <span>AutoBazaar</span>
          </h4>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
          <p>Nostrud exer ciation laboris aliqup</p>

          <a className="edu-btn btn-medium btn-curved custom-style-bg">
            Get Started <i className="icon-4 text-dark"></i>
          </a>
        </div>
      </div>

      <div className="edu-blog-widget widget-categories">
        <div className="inner">
          <h4 className="widget-title">Archives</h4>
          <div className="content">
            <ul className="category-list">
              <li>
                <a href="#">
                  2017 Nevember <span>(3)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  2018 December <span>(7)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  2019 January<span>(2)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  2020 February <span>(1)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  2021 March <span>(3)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="edu-blog-widget widget-tags">
        <div className="inner">
          <h4 className="widget-title">Tags</h4>
          <div className="content">
            <div className="tag-list">
              <a href="#">Language</a>
              <a href="#">eLearn</a>
              <a href="#">Tips</a>
              <a href="#">Course</a>
              <a href="#">Motivation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
