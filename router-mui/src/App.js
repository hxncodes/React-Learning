import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import BlogLayout from "./pages/BlogLayout";
import NotFound from "./pages/NotFound";
import Mui from "./pages/Mui"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested Route */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogList />} />
          <Route path=":id" element={<Blog />} />
        </Route>
        {/* <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<Blog />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/mui" element={<Mui />} />
      </Routes>
    </div>
  );
}

export default App;
