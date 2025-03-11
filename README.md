Project Reflection

One of the biggest challenges was ensuring seamless communication between the frontend and backend, especially dealing with CORS issues. Initially, the API calls were not working correctly due to missing CORS configuration in the backend. This required adjusting the API setup to allow cross-origin requests.
Another challenge was handling data persistence. Since the project does not use a database, I had to maintain the movie and TV show listings in memory. This meant that data would be lost when the server restarted, which isn't ideal for a real-world application.
Postman has been used to test the back-end for API communication for each task (POST,GET,) and it was working flawlessly.
Additionally, implementing the rating system correctly took some iteration. At first, users could only add comments, and the rating was hardcoded to 5 stars. I had to modify the UI and API to allow users to provide a rating manually.
Styling the frontend was also a smaller, somewhat enjoyable challenge. While Tailwind was initially considered, I opted to use plain CSS to avoid potential issues with configuration and integration. Creating a responsive and visually structured layout using CSS required additional effort.

Potential Imrovements for a real product
1. Implement a database to persist data and ensure it remains even after server restarts.
2. Integrate a more robust authentication system to handle user sessions and permissions.
3. Enhance the rating system to include more features, such as average ratings, user-specific ratings
4. Improve the UI with a more modern design and user experience.
5. Add more features, such as user profiles, search functionality, and recommendations.
6. Implement a more robust error handling system to handle unexpected errors and edge cases.
7. Pagination & Filtering: Adding pagination for large datasets and filters to categorize movies and TV shows more effectively.
8. Deploying the App: Hosting the backend on a cloud service (e.g., AWS, Heroku).

Use of AI in development

AI was a useful tool during development, particularly in:
Debugging API issues by analyzing error messages and suggesting solutions.
Providing efficient CSS styling recommendations for layout improvements.
Assisting with structuring the API endpoints and refining data flow between frontend and backend.
Although AI was helpful, understanding the logic behind the implementation was still necessary to ensure correct application behavior.