import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";

import Home from "./components/Home/home";
import Students from "./components/Students/Students";
import Academics from "./components/Academics/academics";
import Examination from "./components/Examination/Examination";
import IQAC from "./components/IQAC/Placement";
import Careers from "./components/Careers/Careers";

import AboutLayout from "./components/About/AboutLayout";
import TheCollege from "./components/About/TheCollege";

import Life from "./components/Life/Life";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<TheCollege />} />
        </Route>

        <Route path="/students" element={<Students />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/life" element={<Life />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
