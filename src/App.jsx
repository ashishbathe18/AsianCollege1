import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

import Home from "./components/Home/home";
import Students from "./components/Students/students";
import Academics from "./components/Academics/academics";
import Culture from "./components/Academics/culture";
import Nss from "./components/Academics/Nss";
import Clubs from "./components/Academics/clubs";
import Gallery from "./components/Academics/Gallery";

import Examination from "./components/Examination/examination";
import IQAC from "./components/IQAC/placement";
import Careers from "./components/Careers/careers";
import Life from "./components/Life/life";
import Contact from "./components/Contact/contact";

import AboutLayout from "./components/About/AboutLayout";
import TheCollege from "./components/About/Thecollege";
import AboutCollegeDrop from "./components/About/AboutCollege";
import President from "./components/About/PresidentDesk";
import Visionpage from "./components/About/Vision";
import Missionpage from "./components/About/Mission";
import OurStaffpage from "./components/About/OurStaff";
import AchievementPage from "./components/About/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ABOUT ROUTES */}
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<TheCollege />} />
          <Route path="college" element={<AboutCollegeDrop />} />
          <Route path="presidentDesk" element={<President/>} />
          <Route path="vision" element={<Visionpage/>} />
          <Route path="mission" element={<Missionpage/>} />
          <Route path="ourStaff" element={<OurStaffpage/>} />
          <Route path="achievements" element={<AchievementPage/>} />
        </Route>

        <Route path="/students" element={<Students />} />
<<<<<<< HEAD
=======

        {/* Academics dropdown pages */}
>>>>>>> cd4851ba5f606392119c496745c9566c5997942b
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/cultural" element={<Culture />} />
        <Route path="/academics/nss" element={<Nss />} />
        <Route path="/academics/clubs" element={<Clubs />} />
        {/* Separate Gallery Page */}
        <Route path="/academics/gallery" element={<Gallery />} />

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
