import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/Movielist" element={<MovieList />} />
      <Route path="/MovieCard" element={<MovieCard />} />
    </Routes>
  );
}

export default App;
