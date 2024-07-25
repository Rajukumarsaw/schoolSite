
import { useState, useEffect } from 'react';

const galleryData = {
  "Autumn 2023": {
    photos: [
      { src: 'https://plus.unsplash.com/premium_photo-1708696237348-74a10a04a41a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Students participating in various sports events.' },
      { src: 'https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Students presenting their science projects.' }
    ],
    videos: [
      { src: 'https://assets.mixkit.co/videos/4519/4519-720.mp4', alt: 'Virtual tour of Springdale Public School.' }
    ]
  },
  "Summer 2023": {
    photos: [
      { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Students performing in the cultural fest.' }
    ],
    videos: []
  },
  "Spring 2023": {
    photos: [
      { src: 'https://plus.unsplash.com/premium_photo-1661270413285-fc9fe2b44e26?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'A glimpse of our interactive classrooms.' }
    ],
    videos: []
  },
  "Autumn 2022": {
    photos: [
      { src: 'https://plus.unsplash.com/premium_photo-1683120887619-8e6eca48afcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Students reading and studying in the school library.' }
    ],
    videos: []
  },
  "Summer 2022": {
    photos: [],
    videos: []
  },
  "Spring 2022": {
    photos: [],
    videos: []
  },
  "Spring 2024": {
    photos: [],
    videos: []
  },
  "Summer 2024": {
    photos: [],
    videos: []
  }
};

const Gallery = () => {
  const [selectedSession, setSelectedSession] = useState("Autumn 2023");
  const [filteredData, setFilteredData] = useState(galleryData[selectedSession]);

  useEffect(() => {
    setFilteredData(galleryData[selectedSession]);
  }, [selectedSession]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
      <div className="mb-4 text-center">
        <select
          className="p-2 border rounded-md"
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
        >
          {Object.keys(galleryData).map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.photos.map((photo, index) => (
          <div key={index} className="w-full h-auto">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto"
              loading="lazy"
            />
            <p className="text-center">{photo.alt}</p>
          </div>
        ))}
        {filteredData.videos.map((video, index) => (
          <div key={index} className="w-full h-auto">
            <video
              src={video.src}
              controls
              className="w-full h-auto"
              loading="lazy"
            ></video>
            <p className="text-center">{video.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

