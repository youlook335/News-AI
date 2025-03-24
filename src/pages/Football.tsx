import { useEffect, useState } from "react";
// import { fetchFootballNews } from "../services/newsService";
import { fetchFootballNews } from "../services/newsServicefootball";
import Modal from "react-modal";

const Football = () => {
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchFootballNews();
      if (data?.articles) {
        setNews(data.articles);
      }
    };
    loadNews();
  }, []);

  // 🏆 Modal Open Function
  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setModalIsOpen(true);
  };

  // ❌ Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo("");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">⚽ Football News</h2>

      {/* News List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-200"
            onClick={() => openModal(article.urlToImage)}
          >
            <img src={article.urlToImage} alt="News" className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            ✖
          </button>
          <video controls className="w-full h-64 rounded-lg">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default Football;
