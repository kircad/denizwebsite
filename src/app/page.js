import { Home } from '../components/Home';
import { NavBar } from '../components/navbar';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import MotionProvider from '../components/MotionProvider';

export default function Page() {
  return (
    <MotionProvider>
      <div className="min-h-screen w-full overflow-x-clip bg-gradient-to-br from-cyan-50 to-blue-100">
        <NavBar />
        <main>
          <section id="home" className="scroll-mt-24">
            <Home />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
