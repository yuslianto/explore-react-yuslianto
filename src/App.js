
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

// import { HomePage, AboutPage, ProfilePage, ProfileDetailPage, AlbumsPage, AlbumDetailPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/:profileID" element={<ProfileDetailPage />} />
        <Route path="albums" element={<AlbumsPage />} />
        <Route path="albums/:albumID" element={<AlbumDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div>Home Page</div>
  )
}

function AboutPage() {
  return (
    <div>About Page</div>
  )
}

export default App;
