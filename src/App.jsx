import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/common/footer";
import HomePage from "./components/Home/home";
import { Navbar } from "./components/common/navbar";
import { EventCalendar } from "./components/calendar";
import IITRPR from "./components/About/iitRopar";
import MEBME from "./components/About/me&be";

function App() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/calendar" element={<EventCalendar/>}/>
            <Route path="/iitrpr" element={<IITRPR />}/>
            <Route path="/me&bme" element={<MEBME />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}

export default App;