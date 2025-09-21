import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components for Home page
import Hero from "./Components/BlogOne/nav/Hero";
import Navbar from "./Components/BlogOne/nav/Navbar";
import Cards from "./Components/BlogOne/Card/Cards";
import Blog from "./Components/BlogOne/Blog/Blog";
import Footer from "./Components/BlogOne/Footer/Footer";

// Components for HomeOne page
import CourseCards from "./Components/Home1/Course Cards/CourseCards";
import LearningSection from "./Components/Home1/Free courses/LearningSection";
import Hero2 from "./Components/Home1/Hero 2/Hero2";
import HomeFooter from "./Components/Home1/Home footer/Homefooter";
import Leading from "./Components/Home1/Leading/Leading";
import LeadingCards from "./Components/Home1/LeadingCards/LeadingCards";
import Navbar2 from "./Components/Home1/Navbar2/Navbar2";

// Components for About page
import AboutHero from "./Components/Pages componant/AboutHero/AboutHero";
import HeroSection from "./Components/Pages componant/ourStory/OurStory";
import OurStoryCard from "./Components/Pages componant/ourstoryCard/OurStoryCard";
import GreaterSuccess from "./Components/Pages componant/greatersuccess/GreaterSuccess";
import Slider2 from "./Components/Pages componant/Slider2/Slider2";
import PersonalizedLearning from "./Components/Pages componant/PersonalizedLearning/PersonalizedLearning";
import Instructor from "./Components/Pages componant/Instructor/Instructor";
import InstructorInfo from "./Components/Home1/Instructor info/InstructorInfo";
// Components for contact page
import ContactHero from "./Components/Contact/ContactNavbar/ContactHero";
import ContactNavbar from "./Components/Contact/ContactNavbar/ContactNavbar";
import ContactUs from "./Components/Contact/ContactUs/ContactUs";
import ContactDetails from "./Components/Contact/Contact details/ContactDetails";
import Startjourney from "./Components/Contact/start journey/Startjourney";
import FAQ from "./Components/Contact/FAQ/FAQ";
import Slider from "./Components/BlogOne/Slider/Slider";
import Testimonial from "./Components/BlogOne/Testimonial/Testimonial";
import TrendingCourses from "./Components/BlogOne/Trending Courses/TrendingCourses";
import Professionaljourney from "./Components/BlogOne/professional journey/Professionaljourney";


// Components for login and register page
import LoginPage from "./Components/Home1/login/LoginPage";
import RegisterPage from "./Components/Home1/Register/RegisterPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={
            <>
              <LoginPage />
            </>
          }
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={
            <>
              <RegisterPage />
            </>
          }
        />
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Cards />
              <Blog />
              <Footer />
            </>
          }
        />

        {/* HomeOne Page */}
        <Route
          path="/homeone"
          element={
            <>
              <Navbar2 />
              <Hero2 />
              <Slider />
              <Leading />
              <LeadingCards />
              <CourseCards />
              <LearningSection />
              <Testimonial />
              <TrendingCourses />
              <Professionaljourney />
              <Startjourney />
              <HomeFooter />
            </>
          }
        />

        {/* AboutOne Page */}
        <Route
          path="/aboutone"
          element={
            <>
              <Navbar2 />
              <AboutHero />
              <HeroSection />
              <OurStoryCard />
              <GreaterSuccess />
              <PersonalizedLearning />
              <Slider2 />
              <Instructor />
              <InstructorInfo />
              <Blog />
              <Footer />
            </>
          }
        />

        {/* Blog Page */}
        <Route
          path="/blogone"
          element={
            <>
              <Navbar />
              <Hero />
              <Cards />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactone"
          element={
            <>
              <ContactHero />
              <ContactNavbar />
              <ContactUs />
              <ContactDetails />
              <FAQ />
              <Startjourney />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


