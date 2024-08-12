// SearchBar component for user input
// import PropTypes to check the types of props being passed to the component
import PropTypes from 'prop-types';

// define the SearchBar component
const SearchBar = ({ searchInput, setSearchInput, searchArtist }) => {
    return (
        <div id="SearchBar">

            {/* // container for the search bar with styling */}
            <div className="flex items-center bg-white border-2 border-black rounded-lg p-2 w-4/5 mx-auto">

                {/* search icon button */}
                <button
                    className="flex items-center justify-center p-2"
                    // trigger searchArtist when the button is clicked
                    onClick={searchArtist}
                >
                    {/* font awesome search icon for SearchArtist button */}
                    <i className="fas fa-search text-black text-2xl"></i>
                </button>

                {/* input field for user to type in search query */}
                <input
                    // input type is text
                    type="text"
                    // placeholder text in the input field
                    placeholder="Search for an Artist..."
                    // set the input field value from the searchInput prop
                    value={searchInput}
                    // update searchInput state when input changes
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={(e) => {
                        // check if the Enter key is pressed
                        if (e.key === 'Enter') {
                            // call searchArtist function when Enter is pressed
                            searchArtist();
                        }
                    }}
                    // styling for the input field
                    className="p-3 w-full"
                />

            </div>

        </div >
    );
};

// define the types of props that SearchBar expects
SearchBar.propTypes = {
    // searchInput should be a string and is required
    searchInput: PropTypes.string.isRequired,
    // setSearchInput should be a function and is required
    setSearchInput: PropTypes.func.isRequired,
    // searchArtist should be a function and is required
    searchArtist: PropTypes.func.isRequired,
};

// export the SearchBar component so it can be used in other files
export default SearchBar; 
