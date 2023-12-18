import "./App.scss";
import MainPage from "./pages/MainPage";
import LogRegPage from "./pages/LogRegPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LogRegPage />} />
    </Routes>
  );
}

export default App;
