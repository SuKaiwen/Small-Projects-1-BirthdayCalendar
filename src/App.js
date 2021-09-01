import logo from './logo.svg';
import './App.css';
import Birthday from './Birthday';

function App() {
  return (
    <div className="App">
      <h2 style = {{backgroundColor:"#728bd4", padding:"10px", color:"white"}}>Birthday Calendar</h2>
      <Birthday />
    </div>
  );
}

export default App;
