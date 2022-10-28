import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero';
import Links from './components/Links/Links';
import DownArrow from './components/DownArrow/DownArrow';
import WorkSection from './components/WorkSection/WorkSection';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Links />
      <DownArrow />
      <WorkSection />
    </div>
  );
}

export default App;
