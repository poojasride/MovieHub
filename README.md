# 🎬 MovieHub

MovieHub is a modern movie search and favorites web application built using **React**, **Tailwind CSS**, and the **OMDb API**.

Users can search for movies and series, filter results by type, navigate using pagination, and manage a personalized favorites watchlist.

---

## ✨ Features

- 🔍 Search movies and series using OMDb API  
- 🎭 Filter results by type (Movie / Series)  
- 📄 Pagination for large result sets  
- ❤️ Add / Remove movies from Favorites  
- 📂 View detailed movie information  
- 🌐 Global state management using React Context API  
- 📱 Fully responsive (Mobile & Desktop)  
- 🎨 Clean, professional streaming-style UI  

---

## ⚠ API Limitation

The free version of the OMDb API does not support episode search via the `s=` parameter.

To maintain accurate results and proper user experience, episode search is disabled in this project.

---

## 🛠 Tech Stack

- React  
- Tailwind CSS  
- React Router DOM  
- Context API  
- Axios  
- OMDb API  

---

## 📁 Project Structure

moviehub/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── api/
│ ├── assets/
│ └── App.jsx
│
├── public/
├── package.json
└── README.md


---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/poojasride/MovieHub.git

# Navigate into the project directory
cd MovieHub

# Install dependencies
npm install

# Start the development server
npm run dev
