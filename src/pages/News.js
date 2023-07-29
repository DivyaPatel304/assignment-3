import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../component/Sidebar';

const News = () => {
  // State hook to store the news articles fetched from the API
  const [articles, setArticles] = useState([]);

  // useEffect hook to fetch news articles when the component mounts
  useEffect(() => {
    // Function to fetch news articles from the NewsAPI
    const fetchNews = async () => {
      try {
        const apiKey = 'fd7e9e7716f34596a46d1696e12eb420';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function when the component mounts
    fetchNews();
  }, []);

  return (
    <>
      {/* Sidebar component */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className='main-container'>
        <h1>News Listing</h1>
        <ul>
          {/* Map over the articles array and render a list item for each article */}
          {articles.map((article) => (
            <li key={article.url}>
              {/* Link to the article's URL, opens in a new tab */}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default News;
