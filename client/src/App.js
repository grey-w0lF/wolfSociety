import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AppBar from "./components/Appbar/Appbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/userScreens/Login";
import ControlPanel from "./components/userScreens/ControlPanel";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<ControlPanel />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
