# Spotify Music App

Welcome to the spotifysearchapp! This full-stack application allows users to search for artists, albums, playlists, and tracks while streaming music to the app from a Spotify Premium Account all in one place!

<img width="802" alt="Screenshot 2024-09-17 at 4 42 22 AM" src="https://github.com/user-attachments/assets/35dd6db2-46f8-4a39-b993-3845804a0994">


## Project Overview

The Spotify Search App is designed to provide a user-friendly interface for discovering albums, playlists, tracks, and your favourite artists. Built with React, TailwindCSS, and the Spotify Web API, this app allows users to search for artists and explore their discography.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install all dependencies.
4. Start the development server with npm start.

Once the project is running, you can use the search bar on the home page to find artists and view their albums.

## Key Features

- **Music WebPlayer:** Queue up tracks on your Spotify Premium account and stream them through the app.
- **Filtered Search Bar:** Find artists, albums, tracks or playlists by typing into the search bar.
- **Embedded Picks:** Embedded playlists, albums, and artists populate the homepage upon loading the app.
- **Featured Item:** Click on any item returned by the Search Bar and replace Embedded Picks with info about your selection.
- **Responsive Design:** The application is optimized for various screen sizes.
- **Real-time Data:** Fetches artist and album information from the Spotify Web API.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **TailwindCSS:** A utility-first CSS framework for styling.
- **Spotify Web API:** Provides access to artist and album data.
- **React Router:** For handling routing within the application.
- **FontAwesome:** For icons.
- **Google Fonts:** For custom fonts.

## Spotify Web API

This project integrates with the Spotify Web API to fetch data about artists and albums. Below are the key endpoints used in this application:

**Search for an Artist:** This endpoint searches for artists based on the user's input.
[Spotify Web API Reference: Search](https://developer.spotify.com/documentation/web-api/reference/search)
![Search for an Artist endpoint](https://github.com/w-sihara/fsd-mvp-w-sihara/blob/main/src/assets/images/artist-search-endpoint-screenshot.png)

**Get Artist's Albums:** This endpoint retrieves a list of albums for a specific artist.
[Spotify Web API Reference: Get Artist's Albums](https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums)
![Get Artist's Albums endpoint](https://github.com/w-sihara/fsd-mvp-w-sihara/blob/main/src/assets/images/artist-albums-endpoint-screenshot.png)

For more information on the Spotify Web API, refer to the official [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/).
![Spotify Web API Documentation](https://github.com/w-sihara/fsd-mvp-w-sihara/blob/main/src/assets/images/spotify-web-api-screenshot.png)

## Architecture Design

The project is built with a component-based architecture using React. The main components include:

- **NavBar:** Provides navigation across different pages.
- **SearchBar:** Allows users to search for artists.
- **CardGrid:** Displays items in a grid layout.
- **ItemCard:** Represents individual album or playlist cards.
- **TrackCard:** Represents individual tracks.

### Folder Structure

- `src/`
  - `assets/` - Contains images and other static assets.
  - `components/` - Reusable components like `NavBar`, `SearchBar`, `CardGrid`, etc.
  - `pages/` - Page components such as `HomePage`.
  - `App.jsx` - Main application component with routing.
  - `index.js` - Entry point of the application.

## Future Enhancements

- **auth/auth login:** Allow users to login and save favorite selections.
- **API Webplayback token** Incorporate webplayer token in useEffect hook (replace hardcoded).


