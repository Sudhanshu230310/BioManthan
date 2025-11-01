import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import HomePage from "./components/home";
import { Navbar } from "./components/navbar";
import { EventCalendar } from "./components/calendar";

function App() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/calendar" element={<EventCalendar/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}

export default App;
