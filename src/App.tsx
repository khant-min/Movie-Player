import { Routes, Route } from "react-router-dom";
import { Landing, Home, MovieDetail, NotFound, Detail, Contact } from "./pages";
import { Layout } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="detail/:id" element={<MovieDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
