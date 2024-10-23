import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
