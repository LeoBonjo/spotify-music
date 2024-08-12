// ItemCard component to display each album
// import PropTypes to check the types of props being passed to the component
import PropTypes from 'prop-types';

// define the ItemCard component
const ItemCard = ({ album }) => {
    return (
        <div id="ItemCard">

            {/* container for each album card */}
            <div id="ItemCard" className="bg-white border-2 border-black rounded-md overflow-hidden">
                {/* container for the image */}
                <div className="w-full h-auto relative">
                    {/* album cover image */}
                    <img
                        // use the URL of the first image from the album's images array
                        src={album.images[0].url}
                        // alt text for the image, which is the album name
                        alt={album.name}
                        // make sure the image covers the width and height of the container
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4">
                    {/* album name, title of the album */}
                    <h3 className="text-lg font-semibold mb-2">{album.name}</h3>
                    {/* album artist's name, name of the first artist */}
                    <p className="text-md font-normal">{album.artists[0].name}</p>
                </div>
            </div>

        </div>
    );
};

// define the types of props that ItemCard expects
ItemCard.propTypes = {
    album: PropTypes.shape({
        // images should be an array and is required
        images: PropTypes.array.isRequired,
        // name should be a string and is required
        name: PropTypes.string.isRequired,
        // artists should be an array and is required
        artists: PropTypes.array.isRequired,
        // album prop itself is required
    }).isRequired,
};

// export the ItemCard component so it can be used in other files
export default ItemCard; 
