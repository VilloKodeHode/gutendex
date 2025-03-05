export const Header = ({
  setFilteredBooksTitle,
  filteredBooksTitle,
  filterBooks,
}) => {
  return (
    <header>
      {/* <img src="" alt="" /> */}
      <div>
        {/* <label htmlFor="gutendex-search">Search</label> */}
        <input
          onChange={(e) => filterBooks(e.target.value)}
          id="gutendex-search"
          type="text"
          placeholder="Search"
        />
      </div>
      <select
        name=""
        id="">
        <option value="/books?topic=children">All</option>
        <option value="">Fiction</option>
        <option value="">Non-Fiction</option>
        <option value="">Mystery</option>
      </select>
      <ul>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
      </ul>
    </header>
  );
};
