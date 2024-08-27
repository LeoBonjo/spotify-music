// NavBar component to display HOME, ABOUT and DOCS
// no imports needed for this component

// define the NavBar component
const NavBar = () => {
  return (
    <div id="NavBar">
      {/* the main navigation element */}
      <nav className="w-full mx-auto my-5 font-bold">
        {/* container for the grid layout */}
        <ul className="grid grid-cols-4 gap-3 mx-auto text-center">
          {/* first nav item for home */}
          <li>
            {/* link to the home page */}
            <a
              href="/"
              className="hover:text-green-500 transition duration-300 text-xl lg:text-2xl sm:text-lg"
            >
              HOME
            </a>
          </li>
          {/* second nav item for about */}
          <li>
            {/* link to the about page */}
            <a
              href="/about"
              className="hover:text-green-500 transition duration-300 text-xl lg:text-2xl sm:text-lg"
            >
              ABOUT
            </a>
          </li>
          {/* third nav item for docs */}
          <li>
            {/* link to the docs page */}
            <a
              href="/docs"
              className="hover:text-green-500 transition duration-300 text-xl lg:text-2xl sm:text-lg"
            >
              DOCS
            </a>
          </li>
          <li>
            {/* link to the docs page */}
            <a
              href="#now-playing"
              className="hover:text-green-500 transition duration-300 text-xl lg:text-2xl sm:text-lg"
            >
              NOW PLAYING
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// export the navbar component so it can be used in other files
export default NavBar;
