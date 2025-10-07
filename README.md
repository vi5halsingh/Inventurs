# Product Management App - MERN Stack

A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for managing products with user authentication, CRUD operations, pagination, and search functionality.

## Features

### Backend (Node.js + Express + MongoDB)
- **User Authentication**: Sign In/Sign Up with JWT tokens
- **Product Management**: Full CRUD operations for products
- **Pagination**: Efficient data loading with pagination support
- **Search & Filter**: Search by name/description and filter by category
- **Security**: Password hashing with bcrypt, JWT authentication
- **Validation**: Input validation using express-validator

### Frontend (React.js)
- **Modern UI**: Clean and responsive design
- **Authentication Forms**: Sign In and Sign Up forms with validation
- **Product Display**: Grid layout with product cards
- **Search & Filter**: Real-time search and category filtering
- **Pagination**: User-friendly pagination controls
- **Product Management**: Add, edit, and delete products (for owners)
- **Toast Notifications**: User feedback for all actions

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **CSS3** - Styling

## Project Structure

```
product-management-app/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Product.js           # Product schema
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── products.js          # Product routes
│   ├── package.json
│   └── server.js                # Main server file
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js        # Navigation component
│   │   │   └── PrivateRoute.js  # Protected route component
│   │   ├── context/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── pages/
│   │   │   ├── Home.js          # Home page
│   │   │   ├── Login.js         # Login page
│   │   │   ├── Register.js      # Registration page
│   │   │   ├── Products.js      # Products listing page
│   │   │   ├── AddProduct.js    # Add product page
│   │   │   └── EditProduct.js   # Edit product page
│   │   ├── App.js               # Main app component
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   └── package.json
└── README.md
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd product-management-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variables file
# Create a .env file in the backend directory with the following variables:
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/product-management
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
```

**Note**: Replace `your_super_secret_jwt_key_here` with a strong secret key for JWT signing.

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

## Running the Application

### 1. Start MongoDB

Make sure MongoDB is running on your system:

**Local MongoDB:**
```bash
# On Windows
net start MongoDB

# On macOS (with Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

**MongoDB Atlas:**
If using MongoDB Atlas, update the `MONGODB_URI` in your `.env` file with your Atlas connection string.

### 2. Start the Backend Server

```bash
# From the backend directory
cd backend

# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The backend server will start on `http://localhost:5000`

### 3. Start the Frontend Development Server

```bash
# From the frontend directory
cd frontend

# Start the React development server
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products (with pagination and search)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (protected)
- `PUT /api/products/:id` - Update product (protected, owner only)
- `DELETE /api/products/:id` - Delete product (protected, owner only)

### Query Parameters for Products
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search term for name/description
- `category` - Filter by category
- `sortBy` - Sort field (name, price, createdAt)
- `sortOrder` - Sort order (asc, desc)

## Usage

### 1. Register/Login
- Navigate to `/register` to create a new account
- Navigate to `/login` to sign in with existing credentials

### 2. View Products
- Go to `/products` to see all products
- Use the search bar to find specific products
- Filter by category using the dropdown
- Use pagination to browse through products

### 3. Manage Products (Authenticated Users Only)
- Click "Add New Product" to create a product
- Click "Edit" on your own products to modify them
- Click "Delete" to remove your products
- Only product owners can edit/delete their products

## Development

### Backend Development
- Uses `nodemon` for automatic server restarts during development
- Environment variables are loaded from `.env` file
- CORS is enabled for frontend communication

### Frontend Development
- Uses Create React App for development setup
- Hot reloading enabled for instant updates
- Axios configured with base URL for API calls
- Context API used for state management

## Deployment

### Backend Deployment
1. Set production environment variables
2. Use `npm start` to run the production server
3. Ensure MongoDB is accessible from your deployment environment

### Frontend Deployment
1. Run `npm run build` to create production build
2. Deploy the `build` folder to your hosting service
3. Update API base URL if needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.

---

**Happy Coding! 🚀**

