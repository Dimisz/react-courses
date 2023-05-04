const SearchBar = ({monsters, filterHandler}) => {
  const handleFilter = (e) => {
    const foundMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    filterHandler(foundMonsters);
  }

  return(
    <input 
      type='search' 
      className='search-box'
      placeholder='search monsters'
      onChange={handleFilter} 
    />
  );
}

export default SearchBar;