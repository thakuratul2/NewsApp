import React from 'react'
import NewsItem from '../Pages/NewsItem'

function News() {
  return (
    <>
    <div className="container my-3">
      <h2 className="text-center mb-5">News App - Top Heading</h2>
      <div className="row">
        <div className="col-md-4">
          <NewsItem title="myTitle" desc="myDesc"/>
        </div>
        <div className="col-md-4">
          <NewsItem title="myTitle" desc="myDesc"/>
        </div>
        <div className="col-md-4">
          <NewsItem title="myTitle" desc="myDesc"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default News