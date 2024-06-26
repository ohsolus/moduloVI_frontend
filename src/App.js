import "./pages/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar";
import LandingPage from "./pages/landingPage";
import WebinarForm from "./pages/webinarForm";
import Chatbot from "./pages/chatBot";
import Test from "./components/test";
import CardFileBlog from "./pages/participants/cardFileBlog";
import ContentSearch from "./components/contentSearch";
import Documentation from "./pages/docs/documentation";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/form" element={<WebinarForm />} />
            <Route path="/support" element={<Chatbot />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/content" element={<CardFileBlog />} />
            <Route path="/grades" element={<ContentSearch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
