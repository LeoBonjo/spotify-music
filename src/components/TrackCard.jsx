const TrackCard = ({ results, category }) => {
  return (
    <div id="TrackCard">
      {/* container for each album card */}
      <div
        id="TrackCard"
        className="bg-white border-2 border-black rounded-md overflow-hidden"
      >
        <div className="h-auto grid gap-4">
          <img src={results.album.images[0].url} alt="" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{results.name}</h3>

          <p className="text-md font-normal">{results.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
};
export default TrackCard;

//IMG: RENDER ART FROM CATEGORY TRACK: src=
//H3: CATEGORY TRACK DISPLAY TRACK NAME --> {result.name}
//P TAG: CATEGORY TRACK DISPLAY ARTIST NAME --> {result.artists[0].name}
