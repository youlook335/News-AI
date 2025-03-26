// import { useState, useEffect } from "react";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// const RealEstateNews = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=real estate&apiKey=${API_KEY}`);
//         const data = await response.json();
//         setNews(data.articles.slice(0, 150));
//       } catch (error) {
//         console.error("Error fetching real estate news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-orange-700 text-center">Real Estate News</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {news.map((article, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">
//             <img
//               src={article.urlToImage || "https://via.placeholder.com/300"}
//               alt="News"
//               className="rounded-lg w-full h-40 object-cover"
//             />
//             <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
//             <p className="text-gray-600 text-sm mt-2">{article.description}</p>
//             <a
//               href={article.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-700 font-semibold mt-3 inline-block"
//             >
//               Read More →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RealEstateNews;



import React from 'react'
import NewsPage from "../components/NewsPage"


const RealEstateNews = () => {
  return (
    <div>
      <NewsPage keyword="Real Estate" />;

    </div>
  )
}

export default RealEstateNews
