// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { ThemeProvider } from './themeContext';
import ThemeSwitcher from './ThemeSwitcher';

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
<Link to='/about' >About</Link>
    <ThemeSwitcher />
  </div>
);

const AboutPage = () => (
  <div>
    <h2>About Page</h2>
    <Link to='/' >Home</Link>
    <ThemeSwitcher />
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;