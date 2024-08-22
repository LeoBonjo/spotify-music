import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";

// define the client ID and client secret for Spotify API access
const CLIENT_ID = "0d51003d15da4d759730b49c86a4eb83";
const CLIENT_SECRET = "721d7765301746ed9663b04375ae2c72";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [results, setResults] = useState(null);
  const [category, setCategory] = useState("");
  // pass the setter as prop to the searchBar and allow the searchbar to set the state for you
  // map out the response of all the different categories you are querying and how the objs are structured

  // For the future, in the player, if there's an option to play the entire album or just the track

  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.error("Error fetching access token:", error));
  }, []);

  const searchFieldFilter = async (e) => {
    e.preventDefault();
    const defaultUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=${category}`;
    const playlistUrl = `https://api.spotify.com/v1/browse/categories/${searchInput}/${category}`;
    let url = category === "playlist" ? playlistUrl : defaultUrl;
    try {
      console.log("hello");
      const searchParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      let filterID;
      let secondUrl;
      await fetch(
        url,
        // // THIS URL CAN RETURN FROM ARTIST, ALBUM, TRACK CATEGORIES:`https://api.spotify.com/v1/search?q=${searchInput}&type=${category}`,
        // // THIS URL CAN RETURN FROM PLAYLIST:`https://api.spotify.com/v1/browse/categories/${searchInput}/${category}`,
        // Have one default URL and IF the category is playlist, use the different one
        // parameters for the search request,
        searchParams
      )
        // convert the response to JSON
        .then((response) => response.json())
        // TO RETURN ALBUMS FROM ARTIST CATEGORY: .then((data) => data.artists.items[0]?.id)
        // TO RETURN TRACKS FROM ALBUM CATEGORY: .then((data) => data.albums.items[0].id)
        // TO RETURN PLAYLISTS FROM PLAYLIST CATEGORY:.then((data) => data)
        // TO RETURN TRACK FROM TRACK CATEGORY: .then((data) => data.tracks.items[0].id)
        .then((data) => {
          console.log(data);
          if (category === "album") {
            filterID = data.albums.items[0].id;
            secondUrl = `https://api.spotify.com/v1/albums/${filterID}/tracks`;
          } else if (category === "artist") {
            filterID = data.artists.items[0]?.id;
            secondUrl = `https://api.spotify.com/v1/artists/${filterID}/albums?include_groups=album&market=US&limit=50`;
          } else if (category === "track") {
            filterID = data.tracks.items[0].id;
            secondUrl = `https://api.spotify.com/v1/tracks/${filterID}/`;
          } else if (category === "playlist") {
            console.log(data);
            setResults(data.playlists.items); // make sure that's the object that you're looking for
            return;
            // set results and return to the function
          }
        })
        .catch((error) => {
          console.error("Error fetching that item:", error);
          return null;
        });
      if (!filterID) {
        console.error("Sorry, nothing matches that search.");
        return;
      }
      console.log("HERE?");
      await fetch(
        // URL FETCH ALBUMS FROM ARTIST CATEGORY: `https://api.spotify.com/v1/artists/${filterID}/albums?include_groups=album&market=US&limit=50`,
        // URL FETCH TRACKS FROM ALBUM CATEGORY: `https://api.spotify.com/v1/albums/${filterID}/tracks`
        // URL FETCH PLAYLISTS FROM PLAYLISTS CATEGORY (DUPLICATE OF ABOVE): `https://api.spotify.com/v1/browse/categories/${searchInput}/playlists`
        // URL FETCH TRACK FROM TRACK CATEGORY: `https://api.spotify.com/v1/tracks/${filterID}/`,
        secondUrl,
        searchParams
      )
        .then((response) => response.json())
        // TO RETURN ALBUMS FROM CATEGORY ARTIST: .then((data) => setResults(data.items))
        // TO RETURN TRACKS FROM CATEGORY ALBUM: .then((data) => setResults(data.items))
        // TO RETURN PLAYLISTS FROM CATEGORY PLAYLIST: .then((data) => setResults(data.playlists.items))
        .then((data) => setResults(data.items))

        .catch((error) => console.error("Error fetching request:", error));
    } catch (error) {
      console.error("Error in searchFieldFilter function:", error);
    }
  };

  // render the HomePage component
  return (
    <div id="HomePage">
      <section className="min-h-screen">
        <div className="mt-20 my-auto">
          {/* banner */}
          <div className="text-center">
            {/* heading */}
            <h1 className="text-3xl md:text-5xl text-center text-black font-extrabold my-3">
              <span className="text-green-500">spotify</span>searchapp.
            </h1>
            {/* paragraph */}
            <p className="text-xl md:3xl mx-6">Pass time with good vibes...</p>
          </div>

          {/* SearchBar */}
          <div className="my-5">
            <SearchBar
              // pass current search input to SearchBar
              searchInput={searchInput}
              // pass function to update search input
              setSearchInput={setSearchInput}
              searchFieldFilter={searchFieldFilter}
              setCategory={setCategory}
            />
          </div>

          {/* CardGrid */}
          {results && (
            <div className="my-10 mx-12">
              <CardGrid results={results} category={category} />
            </div>
          )}

          <p className="text:sm md:text-base mb-10 text-center">
            CodeOp Full-Stack Web Development
            <br />
            MVP Project 2024
            <br />
            <a
              href="https://github.com/w-sihara/fsd-mvp-w-sihara"
              className="text-blue-500 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              fsd-mvp-w-sihara
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

// export the HomePage component so it can be used in other files
export default HomePage;
