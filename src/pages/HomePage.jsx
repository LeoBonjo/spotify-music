import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import FeaturedSection from "../components/FeaturedSection";
import WebPlayback from "../components/WebPlayback";

// define the client ID and client secret for Spotify API access
const CLIENT_ID = "0d51003d15da4d759730b49c86a4eb83";
const CLIENT_SECRET = "721d7765301746ed9663b04375ae2c72";

const HomePage = ({ token }) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [results, setResults] = useState(null);
  const [category, setCategory] = useState("");
  const [design, setDesign] = useState("");
  const [error, setError] = useState(null);
  const [featured, setFeatured] = useState(null);

  // How to navigate the user programmatically - make a 404 page
  // Look at react router slides
  // const navigate = useNavigate();

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
    // Everything is searching if we have results; set results to NULL initially
    // So that React doesn't render the track card when you change to a different category
    // Instead it waits to see if it should render ItemCard or TrackCard
    setResults(null);
    // The GET queries a different url depending on whether the category is set to playlist
    const defaultUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=${category}`;
    const playlistUrl = `https://api.spotify.com/v1/browse/categories/${searchInput}/playlists`;
    let url = category === "playlist" ? playlistUrl : defaultUrl;
    try {
      const searchParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      // Initialize variables to abstract the filterID and secondUrl
      let filterID;
      let secondUrl;
      await fetch(url, searchParams)
        // convert the response to JSON
        .then((response) => response.json())
        //There are multiple secondUrl and filterID values depending on which category the user searches
        .then((data) => {
          // setDesign separates the UX state from the category filter state
          // Makes the search results render correctly if the user wants to change the category between searches
          setDesign(category);
          setError(null);
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
            setResults(data.playlists.items); // make sure that's the object that you're looking for
            return;
          }
        })
        .catch((error) => {
          console.error("Error fetching that item:", error);
          setError(true);
          return null;
        });
      if (!filterID) {
        if (category !== "playlist") {
          console.error("Sorry, nothing matches that search.");
          setError(true);
          return;
        }
      }
      // pass secondUrl and searchParams as props to the fetch
      await fetch(secondUrl, searchParams)
        .then((response) => response.json())
        .then((data) => {
          setError(null);
          if (category === "track") {
            setResults(data);
          } else if (category === "artist" || "album" || "playlist") {
            setResults(data.items);
          }
        })
        .catch((error) => console.error("Error fetching request:", error));
    } catch (error) {
      console.error("Error in searchFieldFilter function:", error);
      setError(true);
    }
  };

  function displayFeaturedItem(id) {
    //use the find method
    console.log("hello??");
    if (category === "track") {
      setFeatured(results);
    } else {
      let featuredItem = results.find((result) => result.id === id);
      setFeatured(featuredItem);
    }
  }

  // render the HomePage component
  return (
    <div id="HomePage">
      <section className="min-h-screen">
        <div className="mt-20 my-auto">
          {/* banner */}
          <div className="text-center " id="header">
            {/* heading */}
            <h1 className="text-3xl md:text-5xl text-center text-black font-extrabold my-3">
              <span className="text-green-500">spotify</span>searchapp.
            </h1>
            {/* paragraph */}
            <p className="text-xl md:3xl mx-6 mb-10">
              Pass the time with good vibes...
            </p>
          </div>
          {/* MusicPlayer */}
          <div>
            <FeaturedSection category={category} featured={featured} />
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
          {error && <Error />}
          {/* CardGrid */}
          {results && (
            <div className="my-10 mx-12">
              <CardGrid
                results={results}
                category={design}
                displayFeaturedItem={(id) => displayFeaturedItem(id)}
              />
            </div>
          )}
          <div id="now-playing">
            <WebPlayback token={token} results={results} />
          </div>
          <p className="text:sm md:text-base my-16 text-center">
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
