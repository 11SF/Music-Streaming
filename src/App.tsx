import { useEffect } from "react";
import "./App.css";
import MainView from "./views/MainView";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
