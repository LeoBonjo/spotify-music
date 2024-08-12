// HomePage component to display main app content
// import React and hooks for managing state and side effects
import { useState, useEffect } from 'react';
// import SearchBar component from components folder
import SearchBar from '../components/SearchBar';
// import CardGrid component from components folder
import CardGrid from '../components/CardGrid';

// define the client ID and client secret for Spotify API access
// the Spotify client ID
const CLIENT_ID = '2c01b84a9238436691a687bccb686992';
// the Spotify client secret
const CLIENT_SECRET = 'd85f0d54f37b4900b09e5122dc377208';

// HomePage component that combines everything for the home page
const HomePage = () => {
    // state variable to store what the user types in the search bar
    const [searchInput, setSearchInput] = useState('');
    // state variable to store the access token needed to fetch data from Spotify
    const [accessToken, setAccessToken] = useState('');
    // state variable to store the list of albums fetched from Spotify
    const [albums, setAlbums] = useState([]);

    // useEffect runs once when the component mounts to get the access token
    useEffect(() => {
        // parameters for the request to get an access token from Spotify
        const authParams = {
            // we are sending data to Spotify to get the token
            method: 'POST',
            headers: {
                // tell Spotify we are sending form data
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // the data we send includes client ID and secret
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        };

        // fetch access token from Spotify API
        // URL to get the token, parameters for the request to get the token
        fetch('https://accounts.spotify.com/api/token', authParams)
            // convert the response to JSON
            .then((result) => result.json())
            // save the access token in the state
            .then((data) => setAccessToken(data.access_token))
            // handle any errors
            .catch((error) => console.error('Error fetching access token:', error));
        // empty dependency array means this runs once when the component is first loaded
    }, []);

    // function to search for an artist and GET their albums
    const searchArtist = async () => {
        try {
            // parameters for the request to search for an artist
            const artistParams = {
                // we are getting data from Spotify
                method: 'GET',
                headers: {
                    // tell Spotify we want JSON data,
                    'Content-Type': 'application/json',
                    // include the access token in the header for authorization,
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            // fetch artist ID based on the search input
            const artistID = await fetch(
                // URL to search for artists,
                `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
                // parameters for the search request,
                artistParams,
            )
                // convert the response to JSON
                .then((response) => response.json())
                // get the ID of the first artist from the search results
                .then((data) => data.artists.items[0]?.id)
                .catch((error) => {
                    // handle any errors 
                    console.error('Error fetching artist ID:', error);
                    // if there's an error, return null
                    return null;
                });

            // if no artist ID was found, log an error and stop the function
            if (!artistID) {
                console.error('Artist not found');
                return;
            }

            // parameters for the request to GET albums of the artist
            const albumParams = {
                // we are getting data from Spotify
                method: 'GET',
                headers: {
                    // tell Spotify we want JSON data, 
                    'Content-Type': 'application/json',
                    // include the access token in the header for authorization
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            // fetch albums of the artist
            await fetch(
                // URL to get albums, 
                `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
                // parameters for the albums request
                albumParams,
            )
                // convert the response to JSON
                .then((response) => response.json())
                // save the list of albums in the state
                .then((data) => setAlbums(data.items))
                // handle any errors
                .catch((error) => console.error('Error fetching albums:', error));
        } catch (error) {
            // handle any errors in the function
            console.error('Error in searchArtist function:', error);
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
                        <p className="text-xl md:3xl mx-6">
                            Discover albums of your favorite artists...
                        </p>
                    </div>

                    {/* SearchBar */}
                    <div className="my-5">
                        <SearchBar
                            // pass current search input to SearchBar
                            searchInput={searchInput}
                            // pass function to update search input
                            setSearchInput={setSearchInput}
                            // pass function to search for an artist
                            searchArtist={searchArtist}
                        />
                    </div>

                    {/* CardGrid */}
                    <div className="my-10 mx-12">
                        {/* pass the list of albums to CardGrid */}
                        <CardGrid albums={albums} />
                    </div>

                    <p className="text:sm md:text-base mb-10 text-center">
                        CodeOp Full-Stack Web Development<br />MVP Project 2024
                        <br />
                        <a href="https://github.com/w-sihara/fsd-mvp-w-sihara" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">fsd-mvp-w-sihara</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

// export the HomePage component so it can be used in other files
export default HomePage;
