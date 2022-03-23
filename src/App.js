import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Shirt from './components/Shirt/Shirt';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Shirt></Shirt>
    </div>
  );
}

export default App;
