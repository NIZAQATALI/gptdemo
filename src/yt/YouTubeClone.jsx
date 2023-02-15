import React, { useState } from "react";

function YouTubeClone() {
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      title: "First Video",
      description: "This is the first video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Second Video",
      description: "This is the second video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Third Video",
      description: "This is the third video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]);

  return (
    <div>
      <h1>YouTube Clone</h1>
      {videoList.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <iframe src={video.src} />
        </div>
      ))}
    </div>
  );
}

export default YouTubeClone;
