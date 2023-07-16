import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import BookingPage from "./BookingPage"
import Confirmpage from "./Confirmationpage";
/*
import Footer from "./Footer";*/

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/confirm" element={<Confirmpage />} />
      </Routes>
    </>
  );
}

export default App;
