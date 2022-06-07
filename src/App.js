import logo from './logo.svg';
import './App.css';

function App() {
  const d = new Date("2015-03-25");
  const currentDateTime =d.toLocaleString()
  return (
    <div className="App">
      <header className="App-header">
       
        
          <h2>{currentDateTime}</h2>
        
       
      </header>
    </div>
  );
}

export default App;
