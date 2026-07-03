import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import SEO from './components/SEO'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ServiceDetails from './components/ServiceDetails'
import ContactUs from './components/ContactUs'
import Blog from './components/Blog'
import TemporaryStaffing from './components/TemporaryStaffing'
import PermanentRecruitment from './components/PermanentRecruitment'
import PayrollManagement from './components/PayrollManagement'
import ManagedServices from './components/ManagedServices'
import FacilityManagement from './components/FacilityManagement'
import NapsApprenticeship from './components/NapsApprenticeship'
import About from './components/About'
import AssociateLogin from './components/AssociateLogin'
import ReadArticle from './components/ReadArticle'
import './App.css'

function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Why />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <SEO />
      <CTA />
      <Footer />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/temporary-staffing" element={<><Nav /><TemporaryStaffing /><Footer /></>} />
        <Route path="/permanent-recruitment" element={<><Nav /><PermanentRecruitment /><Footer /></>} />
        <Route path="/payroll-management" element={<><Nav /><PayrollManagement /><Footer /></>} />
        <Route path="/managed-services" element={<><Nav /><ManagedServices /><Footer /></>} />
        <Route path="/facility-management" element={<><Nav /><FacilityManagement /><Footer /></>} />
        <Route path="/naps-apprenticeship" element={<><Nav /><NapsApprenticeship /><Footer /></>} />
        <Route path="/service/:serviceId" element={<><Nav /><ServiceDetails /><Footer /></>} />
        <Route path="/blogs" element={<><Nav /><Blog /><Footer /></>} />
        <Route path="/blogs/:id" element={<><Nav /><ReadArticle /><Footer /></>} />
        <Route path="/contact" element={<><Nav /><ContactUs /><Footer /></>} />
        <Route path="/about" element={<><Nav /><About /><Footer /></>} />
        <Route path="/why" element={<><Nav /><Why /><Footer /></>} />
        <Route path="/services" element={<><Nav /><Services /><Footer /></>} />
        <Route path="/login" element={<><Nav /><AssociateLogin /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
}
