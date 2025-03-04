import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index";
import { Header } from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([])
  const url = "https://gutendex.com/books/";
  useEffect(() => {
    const fetchBooks = () => {
const response = fetch(url);
// const data = response.json();
setBooks(response);
console.log(response);
    }  
    fetchBooks();
  },[])


  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage books={books} />} />
        </Routes>
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
