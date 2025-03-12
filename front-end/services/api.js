const API_URL = "http://localhost:5169";

export const getMedia = async () => {
  const response = await fetch(`${API_URL}/media`);
  return response.json();
};

export const addMedia = async (media) => {
  const response = await fetch(`${API_URL}/media`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(media),
  });
  return response.json();
};

export const getReviews = async (id) => {
  const response = await fetch(`${API_URL}/media/${id}/reviews`);
  return response.json();
};

export const addReview = async (id, review) => {
  try {
    const response = await fetch(`${API_URL}/media/${id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rating: review.rating, // Ensure rating is included
        comment: review.comment,
      }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error adding review:", error);
    return null;
  }
};


export const deleteMedia = async (id) => {
  try {
    const response = await fetch(`${API_URL}/media/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    
    return true;
  } catch (error) {
    console.error("Error deleting media:", error);
    return false;
  }
};

