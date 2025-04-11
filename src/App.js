import React from 'react';
import './App.css';
import Header from './Header';
import Home from './components/home';
import Footer1 from './components/Footer1';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import AboutMe from './components/AboutMe';
import Loader from './components/Loader'; // ✅ Import loader
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

function AppContent () {
// 👇 Custom component that uses useLocation must be inside Router

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // show loader for 800ms
    return () => clearTimeout(timer);
  }, [location]);


  return (

    
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <div className="content">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/AboutMe" element={<AboutMe />} />
    //         <Route path="/projects" element={<Projects />} /> {/* Add Projects Route */}
    //         <Route path="/ContactMe" element={<ContactUs />} /> 
    //         {/* Add more routes here if needed */}
    //       </Routes>
    //     </div>
    //     <Footer1 /> {/* Footer should be outside Routes */}
    //   </div>
    // </Router>

    <>
    <Header />
    {loading ? (
      <Loader />
    ) : (
      <>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ContactMe" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer1 />
      </>
    )}
  </>
);
};

function App() {
return (
  <Router>
  
    <AppContent /> {/* 👈 Inside Router now */}
  </Router>
  );
}

export default App;
