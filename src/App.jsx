import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
