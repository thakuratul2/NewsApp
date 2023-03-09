import React from 'react'

function NewsItem(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/12825/production/_128831857_bbc-sport-.png" className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="/newitem" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default NewsItem