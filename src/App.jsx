import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Goals from './pages/Goals';
import Experience from './pages/Experience';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';

function App() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'hobbies':
        return <Hobbies />;
      case 'goals':
        return <Goals />;
      case 'experience':
        return <Experience />;
      case 'gallery':
        return <Gallery />;
      case 'feedback':
        return <Feedback />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;