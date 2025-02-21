// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Restaurent from './components/Restaurent';

function App() {
    return (
      <div>
        <Header/>
        <div className="flex flex-wrap  mb-2">
        <Restaurent/>
        <Restaurent/>
        <Restaurent/>
        <Restaurent/>
        <Restaurent/>
        <Restaurent/>
        <Restaurent/>
        </div>
      </div>
      
      
    );
}

export default App;
