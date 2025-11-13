import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
