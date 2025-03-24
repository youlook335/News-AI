import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      if (data && data.articles) setArticles(data.articles);
    };
    getNews();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <img src={article.urlToImage} alt="" className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{article.description}</p>
            <Link to={`/news/${index}`} className="text-blue-500">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
