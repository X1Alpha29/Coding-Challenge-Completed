import React, { useState } from "react";
import MediaList from "./components/MediaList";
import MediaForm from "./components/MediaForm";
import "./App.css"; // Import the styles

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app-container">
      <h1>🎬 Mogul - TV & Movie Reviews</h1>
      <MediaForm onMediaAdded={() => setRefresh(!refresh)} />
      <MediaList key={refresh} />
    </div>
  );
}

export default App;
