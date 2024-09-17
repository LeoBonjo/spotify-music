// AboutPage component to display text content
// no imports needed for this component

const AboutPage = () => {
  return (
    <div id="AboutPage" className="flex justify-center py-10">
      <div className="p-8 w-full max-w-4xl">
        {/* heading for the presentation */}
        <div className="p-4 mb-6">
          <h1 className="text-2xl font-bold mb-4">Project Presentation</h1>
          <p className="text-base mb-6">
            Welcome to the presentation of my project! This overview will cover
            the project&apos;s purpose, key features, technologies used, and the
            overall architecture.
          </p>
        </div>

        {/* introduction */}
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-base">
            This project is a simple full-stack application built using React,
            TailwindCSS, and the Spotify Web API. It provides a user-friendly
            interface for searching and displaying artist albums from Spotify.
            The goal was to create a tool that allows users to explore their
            favorite artists&apos; music more easily.
          </p>
        </div>

        {/* key features */}
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc list-inside text-base">
            <li>Search for artists and view their albums</li>
            <li>Responsive design for various screen sizes</li>
            <li>Real-time data integration with Spotify Web API</li>
          </ul>
        </div>

        {/* technologies used */}
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <ul className="list-disc list-inside text-base">
            <li>React.js</li>
            <li>TailwindCSS</li>
            <li>Spotify Web API</li>
            <li>React Router</li>
            <li>FontAwesome CDN</li>
            <li>Google Fonts</li>
          </ul>
        </div>

        {/* architecture design */}
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3">Architecture Design</h2>
          <p className="text-base">
            The project is designed with a component-based architecture using
            React. The main components include:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base">
            <li>
              <strong>NavBar:</strong> Navigation across different pages.
            </li>
            <li>
              <strong>SearchBar:</strong> Allows users to search for artists.
            </li>
            <li>
              <strong>CardGrid:</strong> Displays albums in a grid layout.
            </li>
            <li>
              <strong>ItemCard:</strong> Represents individual album cards.
            </li>
          </ul>
        </div>

        {/* future enhancements */}
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3">Future Enhancements</h2>
          <p className="text-base">
            Potential future enhancements for this project could include:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base">
            <li>Expanding search capabilities</li>
            <li>Improving the UI/UX</li>
          </ul>
        </div>

        {/* conclusion */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
          <p className="text-base">
            Thank you for reviewing the presentation of the spotifysearchapp.
          </p>
        </div>

        <p className="text:sm md:text-base my-16 text-center">
          CodeOp Full-Stack Web Development
          <br />
          Spotify Music Search App
          <br />
          <a
            href="https://github.com/LeoBonjo"
            className="text-blue-500 hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leo Bonjo GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

// export the AboutPage component so it can be used in other files
export default AboutPage;
