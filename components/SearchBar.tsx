"use client";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
