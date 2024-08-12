// DocsPage component to display text content
// import images from the assets folder
import artistSearchScreenshot from '../assets/images/artist-search-endpoint-screenshot.png';
import artistAlbumsScreenshot from '../assets/images/artist-albums-endpoint-screenshot.png';
import spotifyWebApiScreenshot from '../assets/images/spotify-web-api-screenshot.png';

// DocsPage component to display text content
const DocsPage = () => {
    return (
        <div id="DocsPage" className="flex justify-center py-10">
            {/* main content area for the docs page */}
            <div className="p-8 w-full max-w-4xl">
                <section className="min-h-screen">

                    {/* introduction */}
                    <article className="mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                        <p className="text-base">
                            Welcome to the documentation for the Spotify Search App. This project allows users to search for artists and view their albums using the Spotify API.
                        </p>
                    </article>

                    {/* installation */}
                    <article className="my-8">
                        <h2 className="text-2xl font-semibold mb-3">Installation</h2>
                        <p className="text-base mb-3">To run this project locally, follow these steps:</p>
                        <ol className="list-decimal ml-6 space-y-1 text-base">
                            <li>Clone the repository to your local machine.</li>
                            <li>Navigate to the project directory.</li>
                            <li>Run <code>npm install</code> to install all dependencies.</li>
                            <li>Start the development server with <code>npm start</code>.</li>
                        </ol>
                        <p className="text-base mt-3">
                            Once the project is running, you can use the search bar on the home page to find artists and view their albums.
                        </p>
                    </article>

                    {/* Spotify Web API */}
                    <article className="my-8">
                        <h2 className="text-2xl font-semibold mb-3">Spotify Web API</h2>
                        <p className="text-base mb-3">
                            This project integrates with the Spotify Web API to fetch data about artists and albums. Below are the key endpoints used in this application:
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-base">
                            <li>
                                <strong>Search for an Artist:</strong> This endpoint searches for artists based on the user&apos;s input.
                                <a href="https://developer.spotify.com/documentation/web-api/reference/search" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                    Spotify Web API Reference: Search
                                </a>
                                <img src={artistSearchScreenshot} alt="Search for an Artist endpoint" className="my-5 rounded-md shadow-sm w-full max-w-md border-2 border-black" />
                            </li>
                            <li>
                                <strong>Get Artist&apos;s Albums:</strong> This endpoint retrieves a list of albums for a specific artist.
                                <a href="https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                    Spotify Web API Reference: Get Artist&apos;s Albums
                                </a>
                                <img src={artistAlbumsScreenshot} alt="Get Artist's Albums endpoint" className="my-5 rounded-md shadow-sm w-full max-w-md border-2 border-black" />
                            </li>
                        </ul>
                        <p className="text-base mt-4">
                            For more information on the Spotify Web API, refer to the official
                            <a href="https://developer.spotify.com/documentation/web-api/" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                Spotify Web API Documentation
                            </a>.
                            <img src={spotifyWebApiScreenshot} alt="Spotify Web API Documentation" className="my-5 rounded-md shadow-sm w-full max-w-md border-2 border-black" />
                        </p>
                    </article>

                    {/* how to contribute */}
                    <article className="my-8">
                        <h2 className="text-2xl font-semibold mb-3">How to Contribute</h2>
                        <p className="text-base mb-3">
                            To contribute, please follow these guidelines:
                        </p>
                        <ol className="list-decimal ml-6 space-y-1 text-base">
                            <li>Fork the repository and create a new branch for your feature or bug fix.</li>
                            <li>Make your changes, ensuring you follow the project&apos;s coding style and conventions.</li>
                            <li>Commit your changes with a descriptive commit message.</li>
                            <li>Push your branch to your forked repository and open a pull request to the main repository.</li>
                        </ol>
                    </article>

                    <p className="text:sm md:text-base mb-10 text-center">
                        CodeOp Full-Stack Web Development<br />MVP Project 2024
                        <br />
                        <a href="https://github.com/w-sihara/fsd-mvp-w-sihara" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">fsd-mvp-w-sihara</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

// export the DocsPage component so it can be used in other files
export default DocsPage;
