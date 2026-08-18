import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';
import Features from './sections/Features';
import Insights from './sections/Insights';
import Showcase from './sections/Showcase';
import FinalCTA from './sections/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <Insights />
        <Showcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
