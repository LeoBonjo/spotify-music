# fsd-mvp-w-sihara

Welcome to the spotifysearchapp! This full-stack application allows users to search for artists and view their albums using the Spotify Web API.

![fsd-mvp-w-sihara Project Screenshot](https://github.com/w-sihara/fsd-mvp-w-sihara/blob/main/src/assets/images/fsd-mvp-w-sihara-project-screenshot.png)

## Project Overview

The Spotify Search App is designed to provide a user-friendly interface for discovering albums from your favourite artists. Built with React, TailwindCSS, and the Spotify Web API, this app allows users to search for artists and explore their discography.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install all dependencies.
4. Start the development server with npm start.

Once the project is running, you can use the search bar on the home page to find artists and view their albums.

## Key Features

- **Search for Artists:** Find artists by typing their name into the search bar.
- **View Albums:** Browse through the albums of the searched artist.
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
- **CardGrid:** Displays albums in a grid layout.
- **ItemCard:** Represents individual album cards.

### Folder Structure

- `src/`
  - `assets/` - Contains images and other static assets.
  - `components/` - Reusable components like `NavBar`, `SearchBar`, `CardGrid`, etc.
  - `pages/` - Page components such as `HomePage`.
  - `App.jsx` - Main application component with routing.
  - `index.js` - Entry point of the application.

## Future Enhancements

- **Expand Search Capabilities:** Include more detailed search filters.
- **Improve UI/UX:** Refine the design and user experience.

___

_CodeOp Full-Stack Web Development MVP Project 2024_
