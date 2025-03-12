import React, { useState } from "react";
import { addMedia } from "../services/api";
import "../App.css"; 

const MediaForm = ({ onMediaAdded }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Movie");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMedia({ title, type, description });
    setTitle("");
    setDescription("");
    onMediaAdded(); // Refresh the list
  };

  return (
    <form className="media-form" onSubmit={handleSubmit}>
      <h2>Add Movie/TV Show</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Movie">Movie</option>
        <option value="TV Show">TV Show</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MediaForm;
