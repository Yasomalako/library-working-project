import './App.css';
import BooksProvider from '../src/Context/BooksContext/Books-context';
import {BrowserRouter } from "react-router-dom";
import Router from './Router';
import Header from './Components/Features/Header/Header';


function App() {

  return (
    <>
    <BrowserRouter>
      <BooksProvider>
        <Header/>
        <Router/>
      </BooksProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
