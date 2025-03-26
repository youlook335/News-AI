// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {fetchNews}  from "../services/newsService";
// import { FaArrowCircleLeft } from "react-icons/fa";

// const NewsDetail = () => {
//   const { index } = useParams(); // ✅ Get the article index from URL
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const getNews = async () => {
//       const data = await fetchNews();
//       if (data.articles && data.articles[index]) {
//         setArticle(data.articles[index]); // ✅ Get specific article
//       }
//     };
//     getNews();
//   }, [index]);

//   if (!article) return <h2 className="text-center text-red-500">News not found!</h2>;

//   return (
//     <>
//       <div className="container mx-auto p-6">
//         <Link
//           to="/"
//           className="text-2xl hover:underline flex items-center gap-2"
//           style={{ color: "#0d6efd" }}
//         >
//           <FaArrowCircleLeft />
//           Go Back
//         </Link>
//         <h2 className="text-3xl font-bold mb-4 mt-4">{article.title}</h2>
//         <img src={article.urlToImage || "https://via.placeholder.com/600"} alt="News" className="w-full h-64 object-cover rounded-lg" />
//         <p className="text-gray-700 mt-4">{article.content || article.description}</p>
//         <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
//           Read Full Article →
//         </a>
//       </div>
//     </>
//   );
// };

// export default NewsDetail;
