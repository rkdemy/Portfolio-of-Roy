import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import SongSafari from "./pages/SongSafari";
import ChaseSpace from "./pages/ChaseSpace";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/chasespace" element={<ChaseSpace />} />
            <Route path="/songsafari" element={<SongSafari />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
