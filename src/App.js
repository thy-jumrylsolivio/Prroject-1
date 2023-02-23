import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App () {
  return (
    <div>
      <Header name ="anna" color="purple" />
      <Main color = "yellow" />
      <Sidebar taste = "salty"/>
    </div>

  )
}

export default App;
