import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import * as Sentry from '@sentry/react';
import About from './About.jsx'
import Register from './Register.jsx'

const App = () => {
  return (
    <>
    <style>

    </style>
    <Router>
       <Navbar/>
    <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Highlights />
              {/* <Model /> */}
              <Features />
              <HowItWorks />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />  {/* Define the About route */}
          <Route path="/register" element={<Register />} />  {/* Define the About route */}
        </Routes>
        </main>
    </Router>
    </>
  )
}

export default Sentry.withProfiler(App);
