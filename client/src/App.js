// import logo from './logo.svg';
import './App.css';
import Visualizer from './components/Visualizer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="h-[80vh]">
    <Navbar></Navbar>
    <Visualizer />
  </div>
  );
}

export default App;
