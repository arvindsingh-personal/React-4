import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';

function App() {
  return (
    <div className="App">

      <p>Q1. Create a Button that counts no of clicks and displays on button itself</p>
      <Button />

      <p>Q2. Create a counter with increment, decrement and reset functionality.</p>
      <Counter />


    </div>
  );
}

export default App;
