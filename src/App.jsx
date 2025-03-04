// src/App.jsx
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { VideosEducativos } from "./components/VideosEducativos";
import { ArticulosEducativos } from "./components/ArticulosEducativos";

function App() {
  return (
    <div className="container">
      <Navbar />
      <section id="inicio">
        <Home />
      </section>
      <section id="videos">
        <VideosEducativos />
      </section>
      <section id="articulos">
        <ArticulosEducativos />
      </section>
    </div>
  );
}

export default App;