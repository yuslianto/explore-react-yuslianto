
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import { Dashboard, SignIn, SignUp } from "./pages";
import { listener } from "./utils";

// import { HomePage, AboutPage, ProfilePage, ProfileDetailPage, AlbumsPage, AlbumDetailPage } from "./pages";

function App() {
  useEffect(() => listener(console.log), []);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
