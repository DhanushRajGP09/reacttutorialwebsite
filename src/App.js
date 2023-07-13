import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Learnhtmlcsscurriculum from './Pages/HTML&CSScurriculum/Learnhtmlcsscurriculum';
import Learnreact from './Pages/LearnReact/Learnreact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path='/learnhtmlandcss' element={<Learnhtmlcsscurriculum />}></Route>
        <Route path='/learnreact' element={<Learnreact />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
