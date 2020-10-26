import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery  />
      <Lottery  title='Mini Daily' maxNum={20} maxBalls={4} />
    </div>
  );
}

export default App;