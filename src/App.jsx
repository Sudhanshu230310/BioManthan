import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/common/footer";
import HomePage from "./components/Home/home";
import { Navbar } from "./components/common/navbar";
import MEBME from "./components/About/me&bme";
import IITRPR from "./components/About/IITRopar";
import Sbaoi from "./components/About/SBAOI";
import Stermi from "./components/About/STERMI";
import { EventCalendar } from "./components/more/calendar";
import Abstract from "./components/Abstract";


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
            <Route path="/sbaoi" element={<Sbaoi />}/>
            <Route path="/stermi" element={<Stermi/>}/>
            <Route path="/abstract" element={<Abstract/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}

export default App;