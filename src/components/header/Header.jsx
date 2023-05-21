import { Link } from 'react-router-dom';
import adoptme from '../../../public/assets/img/adoptme.svg';

const Header = () => {
  return (
    <>
      <header className="w-full mb-5 text-gray-700 bg-white  border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col items-center justify-between py-6 px-10 mx-auto md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-1 font-medium text-gray-900 title-font md:mb-0"
          >
            <img src={adoptme} />
          </Link>
          <nav className="flex flex-wrap items-center justify-center mb-1 text-base md:ml-auto md:mr-auto">
            <Link to="/" className="mr-5 font-medium focus:underline hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/animal/recherche"
              className="mr-5 font-medium focus:underline hover:text-gray-900"
            >
              Adopter
            </Link>
            <Link to="/" className="font-medium hover:text-gray-900">
              Faire un don ❤️
            </Link>
          </nav>
          <div className="items-center h-full">
            <Link
              to="/"
              className="px-4 py-2 md:text-xs text-[10px] font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Faire adopter son animal
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
