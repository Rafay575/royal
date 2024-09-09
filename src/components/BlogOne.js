import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; // We'll use axios to fetch data

const BlogOne = () => {
  const [articles, setArticles] = useState([]);

  // Your News API key
  const apiKey = "8c19be0deb724bcdb0fbefae2a66ea4b"; // Replace with your actual NewsAPI key

  useEffect(() => {
    // Function to fetch news articles
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=3&apiKey=${apiKey}`
        );
        // Set the articles state with the first 3 articles
        setArticles(response.data.articles);
        console.log(response)
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [apiKey]);

  // Function to truncate title if too long
  const truncateTitle = (title) => {
    return title.length > 40 ? title.substring(0, 40) + "..." : title;
  };

  return (
    <>
      {/* blog-area start */}
      <div className="blog-area pd-top-115 pt-lg-0">
        <div className="container p-sm-0">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h4 className="subtitle">LATEST BLOG</h4>
                <h2 className="title">LATEST NEWS & ARTICLES</h2>
                <p className="content">
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single-blog-inner">
                    <div className="thumb">
                      <img
                        src={
                          article.urlToImage && article.urlToImage !== "null"
                            ? article.urlToImage
                            : "assets/img/about/notfound.png" // Fallback image if urlToImage is null
                        }
                        alt={truncateTitle(article.title)}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="details">
                      <h4>
                        <a href={article.url} target="_blank" rel="noreferrer">
                          {truncateTitle(article.title)}
                        </a>
                      </h4>
                      <ul className="blog-meta">
                        <li>
                          <FaUserAlt /> By{" "}
                          <span className="ms-1">
                            {article.author || article.source.name || "Unknown"}
                          </span>
                        </li>
                        <li>
                          <FaRegCalendarAlt />{" "}
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </li>
                      </ul>
                      <a
                        className="read-more-text"
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading latest news...</p>
            )}
          </div>
        </div>
      </div>
      {/* blog-area end */}
    </>
  );
};

export default BlogOne;
