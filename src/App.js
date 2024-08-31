import { Home } from "./components/Home";
import { NavBar } from "./components/navbar";
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-50 to-blue-100">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}


export default App;