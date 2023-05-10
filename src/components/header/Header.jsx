import { Link } from 'react-router-dom';
import adoptme from '../../../public/assets/img/adoptme.svg';

const Header = () => {
  return (
    <>
      <header className="w-full mb-5 text-gray-700 bg-white  border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col items-center justify-between py-6 px-10 mx-auto md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <img src={adoptme} />
          </Link>
          <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <Link to="/" className="mr-5 font-medium focus:underline hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/details/:id"
              className="mr-5 font-medium focus:underline hover:text-gray-900"
            >
              Adopter
            </Link>
            <Link href="#_" className="font-medium hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="items-center h-full">
            <Link
              to="/"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
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
