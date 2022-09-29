import './App.css';
import { useState, createContext, Provider } from 'react'
import BooksScreen from './Components/pages/Books-screen/Books-screen';
import BooksCards from './Components/pages/Books-Cards/Books-Cards';
const booksContext = createContext()
function App() {
  const [books, setBooks] = useState("[booksContext]")
  return (
    <div className="App">
      <booksContext.Provider>
        <BooksScreen />
        <BooksCards />
      </booksContext.Provider>
    </div>
  );
}

export default App;
