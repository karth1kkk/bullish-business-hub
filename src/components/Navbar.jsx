import { Link } from 'react-router-dom';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <header className="navbar-container bg-black w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-min-width">
      <svg
          aria-hidden="true"
          className="absolute left-[max(38.7%,25rem)] top-0 h-[5rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={-0} />
        </svg>
        <Link to="/">
          <img src={appleImg} alt="Apple" width={40} height={18} />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            nav.url.startsWith('http') ? (
              <a
                key={nav.name}
                href={nav.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item px-5 text-lg font-bold cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav.name}
              </a>
            ) : (
              <Link
                key={nav.name}
                to={nav.url}
                className="nav-item px-5 text-lg font-bold cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {/* <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} /> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
