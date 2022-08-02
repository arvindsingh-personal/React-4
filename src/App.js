import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Countdown from './Countdown';
import ComponentA from './ComponentA';
import CurrencyConverter from './CurrencyConverter';
import MemoHook from './MemoHook';
import UseCallback from './UseCallback';

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

      <p>Q7. a. Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change. </p>
      <MemoHook />

      <p>Q7. b. Create the same app using useCallback hook.</p>
      <UseCallback />
    </div>
  );
}

export default App;
// https://pastebin.com/Xu86Jxgt