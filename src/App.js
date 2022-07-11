import logo from './logo.svg';
import './App.css';
import Search from './components/home/Search';
import Boxdata from './components/home/Boxdata';
import Graph from './components/home/Graph';
import Sunrise from './components/home/Sunrise';

function App() {
  return (
    <div className="App">
      <Search/>
      <Boxdata/>
      <Graph/>
      <Sunrise/>
    </div>
  );
}

export default App;