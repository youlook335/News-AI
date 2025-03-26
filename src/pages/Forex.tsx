// import { useEffect, useState } from "react";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// const Forex = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const NEWS_URL = `https://newsapi.org/v2/everything?q=forex trading&language=en&apiKey=${API_KEY}`;
//         const response = await fetch(NEWS_URL);
//         const data = await response.json();
        
//         console.log("Forex News Response:", data); // ✅ Debugging: Check API response

//         if (data.articles && data.articles.length > 0) {
//           setNews(data.articles.slice(0, 100)); // 🔥 Limit to 10 articles
//         } else {
//           console.error("No articles found for Forex Market.");
//         }
//       } catch (error) {
//         console.error("Error fetching forex news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Forex Market News</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {news.length > 0 ? (
//           news.map((article, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">
//               <img
//                 src={article.urlToImage ? article.urlToImage : "https://source.unsplash.com/400x300/?finance,forex"}
//                 alt="News"
//                 className="rounded-lg w-full h-40 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
//               <p className="text-gray-600 text-sm mt-2">{article.description}</p>
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-700 font-semibold mt-3 inline-block"
//               >
//                 Read More →
//               </a>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No Forex News Available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Forex;



import React from 'react'
import NewsPage from "../components/NewsPage"


const Forex = () => {
  return (
    <div>
      <NewsPage keyword="Forex Markets" />;

    </div>
  )
}

export default Forex
