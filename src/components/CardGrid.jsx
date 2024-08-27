import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import TrackCard from "./TrackCard";
import ErrorPage from "./Error";

const CardGrid = ({ results, category, displayFeaturedItem }) => {
  const showCard = () => {
    if (results === null) {
      return <ErrorPage />;
    } else if (category === "track") {
      return (
        <TrackCard
          key={results.id}
          results={results}
          displayFeaturedItem={displayFeaturedItem}
        />
      );
    } else if (category === "playlist" || "artist" || "album") {
      console.log(results);
      return results.map((result) => (
        <ItemCard
          key={result.id}
          result={result}
          category={category}
          displayFeaturedItem={displayFeaturedItem}
        />
      ));
    }
  };

  return (
    <div id="CardGrid">
      {/* container for displaying albums in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 ">
        {showCard()}
      </div>
    </div>
  );
};

export default CardGrid;
