// import React, { useState } from "react";

// const newsChannels = [
//   { name: "BBC News", type: "youtube", id: "UC16niRr50-MSBwiO3YDb3RA" },
//   { name: "CNN Live", type: "youtube", id: "UCupvZG-5ko_eiXAupbDfxWw" },
//   { name: "Al Jazeera", type: "youtube", id: "UCNye-wNBqNL5ZzHSJj3l8Bg" },
//   { name: "Geo News", type: "m3u8", url: "https://iptv-org.github.io/iptv/CNN.m3u8" },
//   { name: "Fox News", type: "m3u8", url: "https://iptv-org.github.io/iptv/FoxNews.m3u8" },
// ];

// const LiveNews = () => {
//   const [selectedChannel, setSelectedChannel] = useState(newsChannels[0]);

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-2xl font-bold mb-4">📺 Live News Streaming</h1>
//       <div className="mb-4">
//         {newsChannels.map((channel, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 m-2 rounded ${
//               selectedChannel.name === channel.name ? "bg-blue-500 text-white" : "bg-gray-300"
//             }`}
//             onClick={() => setSelectedChannel(channel)}
//           >
//             {channel.name}
//           </button>
//         ))}
//       </div>

//       <div className="w-full max-w-4xl">
//         {selectedChannel.type === "youtube" ? (
//           <iframe
//             width="100%"
//             height="500"
//             src={`https://www.youtube.com/embed/live_stream?channel=${selectedChannel.id}&autoplay=1`}
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           ></iframe>
//         ) : (
//           <video width="100%" height="500" controls autoPlay>
//             <source src={selectedChannel.url} type="application/x-mpegURL" />
//           </video>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveNews;



import { useState } from "react";

const newsChannels = [
  { name: "BBC News", url: "https://www.youtube.com/embed/LiveBBCNews", thumbnail: "https://via.placeholder.com/150?text=BBC+News" },
  { name: "CNN Live", url: "https://www.youtube.com/embed/LiveCNN", thumbnail: "https://via.placeholder.com/150?text=CNN+Live" },
  { name: "Al Jazeera", url: "https://www.youtube.com/embed/LiveAlJazeera", thumbnail: "https://via.placeholder.com/150?text=Al+Jazeera" },
  { name: "Geo News", url: "https://www.youtube.com/embed/LiveGeoNews", thumbnail: "https://via.placeholder.com/150?text=Geo+News" },
];

export default function LiveNewsPage() {
  const [selectedChannel, setSelectedChannel] = useState(newsChannels[0]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Live News Channels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <iframe
              src={selectedChannel.url}
              title={selectedChannel.name}
              className="w-full h-full border-none"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center">{selectedChannel.name}</h2>
        </div>
        <div className="space-y-4">
          {newsChannels.map((channel) => (
            <div
              key={channel.name}
              className={`p-2 cursor-pointer rounded-lg flex items-center space-x-4 bg-gray-800 hover:bg-gray-700 transition ${
                selectedChannel.name === channel.name ? "border border-blue-500" : ""
              }`}
              onClick={() => setSelectedChannel(channel)}
            >
              <img src={channel.thumbnail} alt={channel.name} className="w-20 h-12 rounded-lg" />
              <span className="text-lg font-medium">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}