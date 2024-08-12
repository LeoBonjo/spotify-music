// CardGrid component to display the album cards
// import PropTypes to check the types of props being passed to the component
import PropTypes from 'prop-types';
// import ItemCard component to display each album
import ItemCard from './ItemCard';

// define the CardGrid component
const CardGrid = ({ albums }) => {
    return (
        <div id="CardGrid">

            {/* container for displaying albums in a grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* loop through each album and create an ItemCard for each one */}
                {albums.map((album) => (
                    // pass each album to the ItemCard component
                    <ItemCard key={album.id} album={album} />
                ))};
            </div>

        </div>
    );
};

// define the types of props that CardGrid expects
CardGrid.propTypes = {
    // albums should be an array and is required
    albums: PropTypes.array.isRequired,
};

// export the CardGrid component so it can be used in other files
export default CardGrid; 
