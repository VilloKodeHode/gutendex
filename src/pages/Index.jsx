import { useState } from "react";

export const IndexPage = ({ books, filteredBooksTitle, filterBook }) => {
  // const [noBooks, setNoBooks] = useState(false);

  // !filteredBooksTitle.length < 1 && filterBook !== "" ? <h3>No books found</h3> : null;

  if (filteredBooksTitle.length < 1 && filterBook !== "") {
    return (
      <section className="h-[calc(100vh-120px)] flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          No books found
        </h3>
      </section>
    );
  } else {
    return (
      <section className="">
        <div className="flex flex-wrap justify-center gap-24">
          {(!filteredBooksTitle.length < 1 ? filteredBooksTitle : books).map(
            (book) => (
              <div
                key={book.id}
                className="flex items-center gap-2 md:gap-8 p-2 md:p-8 bg-amber-100 justify-center flex-col md:flex-row flex-auto md:h-105 w-68 md:w-110"
              >
                <div className="md:w-1/2 text-center md:text-start">
                  <h3 className="text-xl md:text-2xl">{book.title}</h3>
                  <h4>{book.bookshelves[0].replace("Browsing:", "")}</h4>
                </div>
                <img
                  className="aspect-auto object-fit"
                  src={book.formats["image/jpeg"]}
                  alt=""
                />
                {/* <p>{book.summaries[0]}</p> */}
              </div>
            )
          )}
        </div>
      </section>
    );
  }
};
