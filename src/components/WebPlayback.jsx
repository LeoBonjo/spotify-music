import React, { useState, useEffect } from "react";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};

function WebPlayback({ results }) {
  console.log(results);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [current_track, setTrack] = useState(track);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://sdk.scdn.co/spotify-player.js";
    // script.async = true;

    // document.body.appendChild(script);
    // if (results !== null) current_track = results.id;
    console.log(current_track);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(
            "BQCj2UcMkXhSnP6PPxzMWwBNHOn0uQAsm6YDYE9ZqJMrRQQS_KDfBlxmrOksiCEw9tfvo-gtxzw1HniYI8lO04eR5Z3SUQCV5IF6NQxfeglXI_G4MGS0iWP3ENP7scnq28GAkPnZ3zlxfYUU00jJiDTFC4Px2e4toRXwcgs3kRpMAFS3R_vH8hBM9vK9v3F82r9aCTe9KwGZ3hoaYWA"
          );
        },
        volume: 0.2,
      });

      setPlayer(player);
      console.log(player);
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        console.log(state);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      player.connect();
    };
  }, []);

  if (!is_active) {
    return (
      <>
        <h2 className="font-bold text-xl mt-8 justify-center flex">
          NOW PLAYING
        </h2>
        <div className="container">
          <div className="main-wrapper">
            <b>
              {" "}
              Instance not active. Transfer your playback using your Spotify app{" "}
            </b>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-bold text-xl mt-8 justify-center flex">
          NOW PLAYING
        </h2>
        <div className="container">
          <div className="main-wrapper music-player">
            <img
              src={current_track.album.images[0].url}
              className="now-playing__cover"
              alt=""
            />

            <div className="now-playing__side">
              <div className="now-playing__name font-bold">
                {current_track.name}
              </div>
              <div className="now-playing__artist">
                {current_track.artists[0].name}
              </div>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.previousTrack();
                }}
              >
                &lt;&lt;
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.togglePlay();
                }}
              >
                {is_paused ? "PLAY" : "PAUSE"}
              </button>

              <button
                className="btn-spotify"
                onClick={() => {
                  player.nextTrack();
                }}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WebPlayback;
