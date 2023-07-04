import logo from './logo.svg';
import './App.css';
import Assignment1 from './assignment-list/assignment1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/assignment1" element={<Assignment1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
