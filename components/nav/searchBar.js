import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="search-bar">
      <MdSearch fontSize="24" style={{ padding: `0 10px` }} />
      <input type="text" className="search-input" placeholder="Search..." />
      <style jsx>{`
        .search-bar {
          width: auto;
          height: 40px;
          background: var(--color-border);
          border-radius: 5px;
          margin-right: 15px;
          display: flex;
          align-items: center;
          color: var(--color-text-light);
        }

        .search-input {
          min-width: 0;
          min-height: 0;
          width: 200px;
          border: 0;
          padding: 10px 10px 10px 0;
          flex: 1;
          background: transparent;
          transition: 0.2s all ease-in-out;
        }

        .search-input:focus {
          width: 350px;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
