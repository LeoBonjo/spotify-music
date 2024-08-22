import ItemCard from "./ItemCard";
import TrackCard from "./TrackCard";

const CardGrid = ({ results, category }) => {
  console.log(results);
  const showCard = () => {
    if (category === "track") {
      return <TrackCard key={results.id} results={results} />;
    } else if (category === "playlist" || "artist" || "album") {
      return results.map((result) => (
        <ItemCard key={result.id} result={result} category={category} />
      ));
    }
  };

  return (
    <div id="CardGrid">
      {/* container for displaying albums in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {showCard()}
      </div>
    </div>
  );
};

export default CardGrid;
