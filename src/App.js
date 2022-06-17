import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Home_img from './Components/Home_img';
import './Style/app.scss'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Home_img />
    </div>
  );
}

export default App;
