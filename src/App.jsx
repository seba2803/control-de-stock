// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Stock from './components/Stock/Stock';
function App() {
  return (
    <>
      <Header />
      <Stock />

      <Routes>
        {/* <Route path='/' />
        <Route path='stock' />
        <Route path='stock/carga' /> */}
      </Routes>
    </>
  );
}

export default App;
