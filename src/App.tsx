import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
