import { useState } from "react";
import { addReview } from "../api";

const ReviewForm = ({ mediaId, onReviewAdded }) => {
  const [review, setReview] = useState({ rating: 1, comment: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setReview({
      ...review,
      [name]: name === "rating" ? Number(value) : value, // Convert rating to number
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (review.rating < 1 || review.rating > 5) {
      alert("Rating must be between 1 and 5!");
      return;
    }

    console.log("Submitting review:", review); // Debugging step

    await addReview(mediaId, review);

    setReview({ rating: 1, comment: "" }); // Reset form after submission
    onReviewAdded(); // Refresh reviews
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating (1-5):
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={review.rating}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Comment:
        <textarea name="comment" value={review.comment} onChange={handleChange} required />
      </label>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
