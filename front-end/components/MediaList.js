import React, { useEffect, useState } from "react";
import { getMedia, getReviews, addReview, deleteMedia } from "../services/api";
import "../App.css"; 

const MediaList = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    getMedia().then(setMedia);
  }, []);

  const handleAddReview = async (id) => {
    const rating = prompt("Enter your rating (1-5):");
    if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
      alert("Please enter a valid rating between 1 and 5.");
      return;
    }

    const comment = prompt("Enter your review:");
    if (!comment) return;

    await addReview(id, { rating: parseInt(rating), comment });
    const updatedMedia = media.map(async (m) => {
      if (m.id === id) {
        m.reviews = await getReviews(id);
      }
      return m;
    });
    setMedia(await Promise.all(updatedMedia));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    await deleteMedia(id);
    setMedia(media.filter((m) => m.id !== id));
  };

  return (
    <div className="container">
      <h2>Movies & TV Shows</h2>
      <div className="media-grid">
        {media.map((item) => (
          <div key={item.id} className="media-item">
            <h3>{item.title} ({item.type})</h3>
            <p>{item.description}</p>
            <button onClick={() => handleAddReview(item.id)}>Add Review</button>
            <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
            <ul className="review-list">
              {item.reviews?.map((review, index) => (
                <li key={index}>
                  ⭐ {review.rating} - {review.comment}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaList;
