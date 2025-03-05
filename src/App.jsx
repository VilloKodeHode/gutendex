import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index";
import { Header } from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBooksTitle, setFilteredBooksTitle] = useState([]);
  const url = "https://gutendex.com/books/";
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //TODO: finn en måte å generere alle kategorier. Også finn en måte å finne ut hvor mange bøker er i en kategori
        data.results.map((book) =>
          setCategories((prevCategories) => [
            ...prevCategories,
            book.subjects[0],
          ])
        );
        // console.log(allCategories);
        setBooks(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const filterBooks = (input) => {
    setFilteredBooksTitle(
      books.filter((book) =>
        book.title.toLowerCase().match(input.toLowerCase())
      )
    );
    console.log(input);
  };

  useEffect(() => {
    console.log(filteredBooksTitle);
  }, [filteredBooksTitle]);

  return (
    <>
      <Router>
        <Header
          filteredBooksTitle={filteredBooksTitle}
          setFilteredBooksTitle={setFilteredBooksTitle}
          filterBooks={filterBooks}
        />
        <main className="px-4 md:px-8 lg:px-12 xl:px-24">
          <Routes>
            <Route
              path="/"
              element={
                <IndexPage
                  books={books}
                  filteredBooksTitle={filteredBooksTitle}
                  filterBooks={filterBooks}
                />
              }
            />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
