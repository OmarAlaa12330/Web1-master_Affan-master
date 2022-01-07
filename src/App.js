import react from "react";
import Navbar from "./Navbar/navbar";
import "./App.css";
import PreviewWorkout from "./Workout/PreviewWorkout";
import Blog from "./Blogs/Blog";
import Training from "./Training/Training";
import About from "./What-Is-Titanic-Fitness/About";
import Membership from "./Membership/Membership";
import Loginbox from "./Login/loginbox";
import ContactUsForm from "./Contact-Us/ContactUsForm";
import Profile from "./ProfilePage/Profile";
import HomePage from "./HomePage/HomePage";
import SessionPage from "./SessionPage/SessionPage";
import data from "./Workout/test.json";
import TermsConditions from "./Footer/TermsConditions/TermsConditions";
import Footer from "./Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Signup/CreateAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="What-Is-Titanic-Fitness" element={<About />} />
          <Route path="Contact-Us" element={<ContactUsForm />} />
          <Route path="/Sign-Up" element={<CreateAccount />} />
          <Route path="/Log-In" element={<Loginbox />} />
          <Route path="/Profile-Page" element={<Profile />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Workouts" element={<PreviewWorkout data={data} />} />
          <Route path="/Training" element={[<Training />]} />
          <Route path="/Memberships" element={[<Membership />]} />
          <Route path="/Session-page" element={<SessionPage />} />
          <Route path="/Terms&Conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
