Product Management App - MERN Stack
This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for managing a product inventory. It features robust user authentication, full CRUD (Create, Read, Update, Delete) functionality for products, server-side pagination, and search capabilities.

Brief Explanation of Approach
The application is architected as a modern, decoupled web app with a distinct frontend and backend.

Backend (Node.js & Express.js):

A RESTful API was created to handle all business logic and data manipulation.

Authentication: User registration and login are secured using JSON Web Tokens (JWT). Passwords are not stored directly; they are hashed using bcryptjs for security.

Authorization: Protected routes (creating, updating, deleting products) are secured using middleware that verifies the JWT token from the request headers, ensuring only authenticated users can perform these actions.

Database: MongoDB is used as the database, with Mongoose as the ODM for defining schemas (User, Product) and interacting with the data.

Efficiency: The product fetching endpoint (GET /api/products) is optimized with server-side pagination and search/filter logic to handle large datasets efficiently without overloading the client.

Frontend (React.js):

Built as a Single Page Application (SPA) using Vite for a fast development experience.

UI/UX: Styled with Tailwind CSS for a clean, modern, and responsive user interface that works across devices.

Routing: react-router-dom is used for client-side routing, enabling seamless navigation between pages like Home, Products, Login, and Register without full page reloads.

State Management: Component-level state is managed with React hooks (useState, useEffect). A centralized auth object in App.jsx handles user authentication status across the application.

API Communication: axios is used to make HTTP requests to the backend API. A proxy is configured in vite.config.js to forward /api requests to the backend server during development, avoiding CORS issues.

Setup Instructions
Prerequisites
Node.js (v14 or higher recommended)

npm (comes with Node.js)

MongoDB (Ensure your MongoDB server is running locally or you have a connection string from a service like MongoDB Atlas)

1. Clone the Repository
git clone [https://github.com/your-username/inventurs.git](https://github.com/your-username/inventurs.git)
cd inventurs

2. Backend Setup
Navigate to the backend directory:

cd backend

Install backend dependencies:

npm install

Create an environment variables file:
Create a new file named .env in the backend directory and add the following, replacing the placeholder values:

# The port your backend server will run on
PORT=5000

# Your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/product-management

# A strong, secret key for signing JWTs
JWT_SECRET=your_super_secret_jwt_key

3. Frontend Setup
Navigate to the frontend directory from the root:

cd frontend

Install frontend dependencies:

npm install

How to Run the App
You will need to run the backend and frontend in two separate terminal windows.

1. Run the Backend Server
Navigate to the backend directory:

cd backend

Start the server in development mode (with auto-reloading):

npm run dev

The backend API will be running on http://localhost:5000.

2. Run the Frontend App
Navigate to the frontend directory:

cd frontend

Start the Vite development server:

npm run dev

The React application will open in your browser at http://localhost:5173. The app is now fully running and connected.