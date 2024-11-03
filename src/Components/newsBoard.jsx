import React, { useState, useEffect } from 'react';
import { NewsItem } from './newsItem';

export const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    let url = ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2cf2797ff5eb45aea1753abbaec268b3`;
    fetch(url)
    .then(response=> response.json())
    .then(data=> setArticles(data.articles));
  }, [])

  return (
    <div>
      <h2 className="text-center p-3">
        <span className="badge bg-danger fs-1">Latest</span>
        <span className="fs-1">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No articles available or loading failed.</p>
      )}
    </div>
  );
  
};
