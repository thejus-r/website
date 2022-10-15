import Background from "./components/Background";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <Banner />
      <Background />
    </div>
  );
}

export default App;
