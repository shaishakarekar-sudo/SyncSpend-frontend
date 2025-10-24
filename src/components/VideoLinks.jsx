import React from "react";

function VideoLinks() {
  const videos = [
    { title: "How to Manage Money as a Student", link: "https://www.youtube.com/watch?v=0V-6kD9W6rE" },
    { title: "Budgeting 101 for Beginners", link: "https://www.youtube.com/watch?v=m3e8aYl2CzY" },
    { title: "How to Save Money Fast!", link: "https://www.youtube.com/watch?v=dR8E4JkHo0I" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">💡 Helpful Videos</h2>
      <ul className="list-disc pl-6 space-y-2">
        {videos.map((v, i) => (
          <li key={i}>
            <a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {v.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoLinks;
