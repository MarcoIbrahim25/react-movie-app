import "./App.css";
import Home from "./pages/home";
import MovieCard from "./components/MovieCard";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites";
function App() {
  return (
    <main className="main-content">
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routers>
    </main>
  );
}

export default App;
