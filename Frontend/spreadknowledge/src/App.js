import './App.css';
// import Auth from './Pages/Auth/Auth';
import AllRoutes from './Routes/AllRoutes';
import Navbar from "./Components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
     <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
