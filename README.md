# Task Manager - React + Node.js + MongoDB (Fullstack)

Simple full-stack task manager for students to manage daily tasks.
- Frontend: React (Vite)
- Backend: Node.js + Express + Mongoose
- Database: MongoDB (Atlas or local)

## Project structure
- /frontend  -> React app (Vite)
- /backend   -> Express API

## Quick setup (development)
1. Clone or unzip the project.
2. Create a MongoDB database (MongoDB Atlas or local). Note the connection string, e.g. `mongodb://localhost:27017/tasks_db` or Atlas URI.
3. Backend:
   ```bash
   cd backend
   cp .env.example .env
   # edit .env and set MONGO_URI and PORT as needed
   npm install
   npm run dev   # runs nodemon (or `node index.js` if not using dev)
   ```
4. Frontend:
   ```bash
   cd frontend
   npm install
   npm run dev   # starts Vite dev server (default port 5173)
   ```
5. Open the frontend URL shown by Vite (http://localhost:5173) and use the app.

## API endpoints (backend)
- GET /api/tasks         -> list tasks
- POST /api/tasks        -> create task  { title, description, dueDate, completed }
- PUT /api/tasks/:id     -> update task
- DELETE /api/tasks/:id  -> delete task

## Deploy & GitHub
1. Initialize a git repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new GitHub repo and follow their instructions to push (or use `gh` CLI).
3. Add your .env to `.gitignore` (already set).

---
If you want, I can also push this to a GitHub repo for you — provide repository name and a personal access token with repo permissions.
