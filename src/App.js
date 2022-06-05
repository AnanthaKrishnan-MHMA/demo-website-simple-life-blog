import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';
import RecentPosts from './components/recent_posts/RecentPosts';
function App() {

  return (
    <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/recentposts" element={<RecentPosts />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}
// note map an array of urls to recent post
export default App;
