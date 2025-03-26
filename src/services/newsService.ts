// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = `https://newsapi.org/v2/everything?q=news&language=en&apiKey=${API_KEY}`;

// export const fetchNews = async () => {
//   try {
//     const response = await fetch(BASE_URL);
//     if (!response.ok) throw new Error("Failed to fetch news");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return null;
//   }
// };