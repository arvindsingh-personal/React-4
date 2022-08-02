import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Countdown from './Countdown';
import ComponentA from './ComponentA';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div className="App">

      <p>Q1. Create a Button that counts no of clicks and displays on button itself</p>
      <Button />

      <p>Q2. Create a counter with increment, decrement and reset functionality.</p>
      <Counter />

      <p>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</p>
      <Countdown />

      <p>Q4. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</p>
      <ComponentA />

      <p>Q4. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</p>
      <CurrencyConverter />
    </div>
  );
}

export default App;
// https://pastebin.com/Xu86Jxgt