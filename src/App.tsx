import { AcademicSection } from './components/AcademicSection';
import { CourtSection } from './components/CourtSection';
import { DogSection } from './components/DogSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

function App() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <CourtSection />
      <AcademicSection />
      <DogSection />
      <Footer />
    </main>
  );
}

export default App;
