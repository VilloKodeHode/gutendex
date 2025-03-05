export const IndexPage = ({ books, filteredBooksTitle }) => {
  return (
    <section className="">
      <div className="flex flex-wrap justify-center gap-24">
        {(!filteredBooksTitle.length < 1 ? filteredBooksTitle : books).map(
          (book) => (
            <div
              key={book.id}
              className="flex items-center gap-2 md:gap-8 p-2 md:p-8 bg-amber-100 justify-center flex-col md:flex-row flex-auto md:h-105 w-68 md:w-110">
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
};
