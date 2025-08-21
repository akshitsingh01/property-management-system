# RealEstateApp

Full-stack Real estate web application with React frontend and Node/Express backend. Provides property listing, posting, chat, likes, and user management.

## Quick links (open these files)
- Frontend entry: [frontend/src/index.js](frontend/src/index.js) (`index.js`)
- Frontend context: [`propertyContext`](frontend/src/context/RealEstateContext.jsx) ([frontend/src/context/RealEstateContext.jsx](frontend/src/context/RealEstateContext.jsx))
- Post property flow: [frontend/src/pages/PostProperty.jsx](frontend/src/pages/PostProperty.jsx) (`PostProperty.jsx`)
- Property view page: [frontend/src/pages/Property.jsx](frontend/src/pages/Property.jsx) (`Property.jsx`)
- Backend application: [backend/app.js](backend/app.js) (`app.js`)
- Property routes: [`propertyRouter`](backend/routes/property.route.js) ([backend/routes/property.route.js](backend/routes/property.route.js))
- Property model: [`Property` model](backend/models/property.model.js) ([backend/models/property.model.js](backend/models/property.model.js))
- User model: [backend/models/user.model.js](backend/models/user.model.js) (`user.model.js`)
- Message model: [backend/models/message.model.js](backend/models/message.model.js) (`message.model.js`)
- Chat model: [backend/models/chat.model.js](backend/models/chat.model.js) (`chat.model.js`)
- Auth service: [`setToken` / `getToken`](backend/service/auth.js) ([backend/service/auth.js](backend/service/auth.js))
- File upload middleware: [`upload`](backend/middleware/multer.middleware.js) ([backend/middleware/multer.middleware.js](backend/middleware/multer.middleware.js))
- Frontend environment: [frontend/.env](frontend/.env) ([frontend/.env](frontend/.env))
- Backend environment: [backend/.env](backend/.env) ([backend/.env](backend/.env))
- Frontend README (CRA docs): [frontend/README.md](frontend/README.md) ([frontend/README.md](frontend/README.md))

## Features
- Post, edit, and view properties (residential, commercial, PG).
- Multi-step property posting UI (see [`PostProperty.jsx`](frontend/src/pages/PostProperty.jsx)).
- Image uploads with multer (backend middleware: [`upload`](backend/middleware/multer.middleware.js)).
- Real-time chat using Socket.IO (server in [backend/app.js](backend/app.js), client in [`propertyContext`](frontend/src/context/RealEstateContext.jsx)).
- Authentication with JWT via [`setToken`](backend/service/auth.js) / [`getToken`](backend/service/auth.js).
- Property data modeled in [`property.model.js`](backend/models/property.model.js).
- Notifications via react-toastify and animations via framer-motion.

## Tech stack
- Frontend: React, React Router, framer-motion, react-slick, react-toastify, Tailwind CSS.
  - Entry: [frontend/src/index.js](frontend/src/index.js)
  - Context/state: [`propertyContext`](frontend/src/context/RealEstateContext.jsx)
- Backend: Node.js, Express, Mongoose, Socket.IO.
  - Main app: [backend/app.js](backend/app.js)
  - Routes: [backend/routes/property.route.js](backend/routes/property.route.js)
  - Models: [backend/models/property.model.js](backend/models/property.model.js), [backend/models/user.model.js](backend/models/user.model.js)
- Database: MongoDB (configure via [backend/.env](backend/.env))
- File storage: local `uploads/` (configured in [backend/middleware/multer.middleware.js](backend/middleware/multer.middleware.js))

## Local setup

Prerequisites:
- Node.js >= 18
- MongoDB running locally or a connection URI

1. Backend
   - cd backend
   - npm install
   - Create/confirm environment variables in [backend/.env](backend/.env)
   - Start: npm run start (uses nodemon as configured in [backend/package.json](backend/package.json))

2. Frontend
   - cd frontend
   - npm install
   - Create/confirm environment variables in [frontend/.env](frontend/.env)
   - Start: npm start
   - Frontend entry is [frontend/src/index.js](frontend/src/index.js)

Default API base: http://localhost:8000/api/v1

Important backend endpoints (see [`propertyRouter`](backend/route
