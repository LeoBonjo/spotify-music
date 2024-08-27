import { Link } from "react-router-dom";

const TrackCard = ({ results, displayFeaturedItem }) => {
  return (
    <div id="TrackCard">
      {/* container for each album card */}
      <Link to="/">
        <div
          id="TrackCard"
          className="bg-white border-2 border-black rounded-md overflow-hidden"
          onClick={() => displayFeaturedItem(results.id)}
        >
          {results && (
            <>
              <div className="h-auto grid gap-4">
                <img src={results.album.images[0].url} alt="" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{results.name}</h3>

                <p className="text-md font-normal">{results.artists[0].name}</p>
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};
export default TrackCard;

//IMG: RENDER ART FROM CATEGORY TRACK: src=
//H3: CATEGORY TRACK DISPLAY TRACK NAME --> {result.name}
//P TAG: CATEGORY TRACK DISPLAY ARTIST NAME --> {result.artists[0].name}
