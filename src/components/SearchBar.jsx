// SearchBar component for user input
// import PropTypes to check the types of props being passed to the component
import PropTypes from "prop-types";

// define the SearchBar component
const SearchBar = ({
  searchInput,
  setSearchInput,
  setCategory,
  searchFieldFilter,
}) => {
  return (
    <div id="SearchBar">
      {/* // container for the search bar with styling */}
      <form
        id="search-form"
        className="flex items-center bg-white border-2 border-black rounded-lg p-2 w-4/5 mx-auto"
      >
        <select
          name="filters-dropdown"
          id="filters-dropdown"
          className="flex items-center justify-center p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Filter</option>
          <option value="artist">Artist</option>
          <option value="track">Track</option>
          <option value="album">Album</option>
          <option value="playlist">Playlists</option>
        </select>

        {/* input field for user to type in search query */}
        <input
          // input type is text
          type="text"
          // placeholder text in the input field
          placeholder="What do you want to hear?"
          // set the input field value from the searchInput prop
          value={searchInput}
          // update searchInput state when input changes
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => {
            // check if the Enter key is pressed
            if (e.key === "Enter") {
              // call searchArtist function when Enter is pressed
              (e) => searchFieldFilter(e);
            }
          }}
          // styling for the input field
          className="p-3 w-full"
        />
        {/* because it's a FORM element, you have to pass the event as an argument and preventDefault in the function */}
        <button type="submit" onClick={(e) => searchFieldFilter(e)}>
          <i className="fas fa-search text-black text-2xl mr-5"></i>
        </button>
      </form>
    </div>
  );
};

// define the types of props that SearchBar expects
SearchBar.propTypes = {
  // searchInput should be a string and is required
  searchInput: PropTypes.string.isRequired,
  // setSearchInput should be a function and is required
  setSearchInput: PropTypes.func.isRequired,
  // searchArtist should be a function and is required
  searchFieldFilter: PropTypes.func.isRequired,
};

// export the SearchBar component so it can be used in other files
export default SearchBar;
