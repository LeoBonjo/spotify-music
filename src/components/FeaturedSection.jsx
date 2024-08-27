import { useState } from "react";

const FeaturedSection = ({ category, featured }) => {
  console.log(featured);
  const displayItemType = () => {
    if (category === "artist") {
      return "ALBUM";
    } else if (category === "album") {
      return "TRACK";
    } else if (category === "playlist") {
      return "PLAYLIST";
    } else if (category === "track") {
      return "TRACK";
    }
  };

  const displayFeatImage = () => {
    if (category === "artist") {
      return (
        <img
          src={featured.images[0].url}
          alt={featured.name}
          className="w-auto max-h-80 flex justify-center ml-28 object-cover"
        />
      );
    } else if (category === "album") {
      return (
        <i className="fa fa-music mx-auto mt-5 fa-4x" aria-hidden="true"></i>
      );
    } else if (category === "playlist") {
      return (
        <img
          src={featured.images[0].url}
          alt={featured.name}
          className="w-auto max-h-80 flex justify-center ml-28 object-cover"
        />
      );
    } else if (category === "track") {
      return (
        <img
          src={featured.album.images[0].url}
          alt={featured.name}
          className="w-auto max-h-80 flex justify-center ml-28 object-cover"
        />
      );
    }
  };

  const displayFeatDescription = () => {
    if (category === "artist") {
      return (
        <h4 className=" flex justify-center">{featured.artists[0].name}</h4>
      );
    } else if (category === "album") {
      return (
        <h4 className=" flex justify-center">{featured.artists[0].name}</h4>
      );
    } else if (category === "playlist") {
      return <h4 className=" flex justify-center">{featured.description}</h4>;
    } else if (category === "track") {
      return (
        <h4 className=" flex justify-center">{featured.artists[0].name}</h4>
      );
    }
  };

  if (featured === null) {
    return (
      <>
        <h2 className="font-bold text-xl mt-8 justify-center flex">
          FEATURED SELECTIONS
        </h2>
        <div className="container">
          <div className="main-wrapper">
            <b>
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX09NvEVpeM77?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </b>
            <b>
              <iframe
                src="https://open.spotify.com/embed/album/5XGRiFmZOsCy6ZqRFG5d6t?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </b>
            <b>
              <iframe
                src="https://open.spotify.com/embed/track/0gatssZ0J7pMAlvFCGZZGH?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </b>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-bold text-xl mt-8 mb-8 justify-center flex">
          FEATURED {displayItemType()}
        </h2>
        <div className="container flex justify-center m-auto">
          {displayFeatImage()}
          <div className=" flex flex-col justify-center m-auto">
            <h4 className="font-bold flex justify-center">{featured.name}</h4>
            {displayFeatDescription()}
          </div>
        </div>
      </>
    );
  }
};
export default FeaturedSection;
