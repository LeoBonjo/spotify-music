const ItemCard = ({ result, category }) => {
  console.log("CATEGORY", category);
  const renderPTag = () => {
    if (category === "playlist") {
      return result?.description;
    } else if (category === "artist" || "album") {
      return result?.artists[0].name;
    }
  };

  const renderImg = () => {
    if (category === "album") {
      return <i class="fa fa-music mx-auto mt-5 fa-4x" aria-hidden="true"></i>;
    } else if (category === "playlist") {
      return (
        <img
          src={result.images[0].url}
          alt={result.name}
          className="w-full h-full object-cover"
        />
      );
    } else if (category === "artist") {
      return (
        <img
          src={result.images[0].url}
          alt={result.name}
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <div id="ItemCard">
      <div
        id="ItemCard"
        className="bg-white border-2 border-black rounded-md overflow-hidden"
      >
        <div className="h-auto grid gap-4">{renderImg()}</div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{result.name}</h3>

          <p className="text-md font-normal">{renderPTag()}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
