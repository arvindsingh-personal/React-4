import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Countdown from './Countdown';
import ComponentA from './ComponentA';
import CurrencyConverter from './CurrencyConverter';
import MemoHook from './MemoHook';
import UseCallback from './UseCallback';
import DelayComponent from './DelayComponent';

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

      <p>Q5. Make the currency converter you made using context,  now with useContext Hook</p>
      <CurrencyConverter />

      <h6>Q6. Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</h6>
      <DelayComponent />

      <p>Q7. a. Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change. </p>
      <MemoHook />

      <p>Q7. b. Create the same app using useCallback hook.</p>
      <UseCallback />
    </div>
  );
}

export default App;
// https://pastebin.com/Xu86Jxgt