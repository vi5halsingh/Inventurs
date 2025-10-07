# Product Management Frontend

A modern React frontend built with Vite, Tailwind CSS, and industry best practices.

## Features

- ⚡ **Vite** - Lightning fast build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔐 **Context API** - State management
- 🛡️ **Protected Routes** - Authentication-based routing
- 🚀 **Lazy Loading** - Code splitting for better performance
- 🎯 **Hover Effects** - Interactive UI elements
- 📱 **Responsive Design** - Mobile-first approach
- 🔔 **Toast Notifications** - User feedback
- 🚫 **404 Handling** - Custom not found page

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── product/        # Product-related components
│   └── ui/             # Generic UI components
├── contexts/           # React Context providers
├── pages/              # Page components
├── routes/             # Routing configuration
├── services/           # API services
└── main.jsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- User registration and login
- JWT token management
- Protected routes
- Automatic token refresh

### Product Management
- View all products with pagination
- Search and filter products
- Add new products
- Edit existing products
- Delete products (owner only)

### UI/UX
- Responsive design
- Hover effects and animations
- Loading states
- Error handling
- Toast notifications

### Performance
- Lazy loading of components
- Code splitting
- Optimized images
- Efficient state management

## API Integration

The frontend connects to the backend API through:
- Axios interceptors for authentication
- Automatic token handling
- Error handling and user feedback
- Request/response transformation

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom components** for reusable UI elements
- **Responsive design** with mobile-first approach
- **Hover effects** and smooth transitions
- **Dark mode ready** (can be easily implemented)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

