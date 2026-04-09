import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from './components/Navigation';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Photography from './pages/Photography';
import Travel from './pages/Travel';
import FoodRecipes from './pages/FoodRecipes';
import FoodReviews from './pages/FoodReviews';
import MapPage from './pages/MapPage';
import Academics from './pages/Academics';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF7F4] selection:bg-[#F0D0D0] selection:text-[#7A3030] overflow-x-hidden">
      <div className="grain-overlay" />
      {/* Global Artistic Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -left-10 text-8xl opacity-[0.03] select-none"
        >
          ✧
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -right-10 text-9xl opacity-[0.03] select-none"
        >
          ✺
        </motion.div>
        <div className="absolute top-[40%] right-[5%] w-64 h-64 border border-[#A84848]/5 rounded-full rotate-12" />
        <div className="absolute bottom-[30%] left-[5%] w-48 h-48 border border-[#d4a8c8]/5 rounded-full -rotate-12" />
      </div>

      <WelcomePage />
      
      <div className="relative z-10">
        <Navigation />
        <ScrollToTop />
        
        <main className="min-h-[calc(100vh-80px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/food" element={<FoodRecipes />} />
                <Route path="/food/recipes" element={<FoodRecipes />} />
                <Route path="/food/reviews" element={<FoodReviews />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/about" element={<About />} />
                <Route path="/post/:id" element={<PostDetail />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
