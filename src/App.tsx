import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedCourses } from './components/FeaturedCourses';
import { Services } from './components/Services';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <FeaturedCourses />
          <AboutSection />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;