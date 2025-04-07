import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Scholarships from './components/Scholarships';
import AboutSection from './components/AboutSection';
import SuccessStories from './components/SuccessStories';
import BlogSection from './components/BlogSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ScholarshipProgram from './components/ScholarshipProgram';
import { RegistrationProcedure } from './components/RegistrationProcedure';
import { ApplicationTimeline } from './components/ApplicationTimeline';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <AboutUs />
      <ScholarshipProgram />
      <RegistrationProcedure />
      <ApplicationTimeline />
      <Footer />
    </div>
  );
}
