import './App.css';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    // BEM
    <div className="App">
      {/* <h1>I am gonna build a fucking Amazon Store! 🚀 </h1> */}
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
