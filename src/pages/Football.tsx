import { fetchFootballNews } from "../services/newsServicefootball";
import { useEffect, useState } from "react";

const Football = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchFootballNews();
      if (data?.articles) {
        setNews(data.articles);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-6 text-blue-900">Football News</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
            <p className="text-sm mt-1">{article.description}</p>
            <a href={article.url} target="_blank" className="text-blue-500 mt-2 block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Football;
