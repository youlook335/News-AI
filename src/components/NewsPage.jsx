import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsPage = ({ keyword }) => {
  const [news, setNews] = useState([]);

  // 🏆 Fetch News API (Dynamic Keyword)
  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`);
      const data = await response.json();
      setNews(data.articles.slice(0, 30)); // 20 خبریں لو
    } catch (error) {
      console.error(`Error fetching ${keyword} news:`, error);
    }
  };

  useEffect(() => {
    fetchNews(); // پہلی بار فوراً لوڈ کرو
    const interval = setInterval(fetchNews, 90000); // ہر 10 سیکنڈ بعد اپڈیٹ
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center font-bold mb-6 text-blue-900">{keyword} News</h1>

      {/* 📰 News List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">
            <img
              src={article.urlToImage || "https://via.placeholder.com/300"}
              alt="News"
              className="rounded-lg w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold mt-3 inline-block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
