import adoptMe from '../../../public/assets/img/adoptMe.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-slate-50 py-2 px-20 mb-5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={adoptMe}
              alt="adopt-me logo"
              className="py-0"
              style={{ width: '50px', height: '50px' }}
            />
          </Link>
          <div className="flex gap-5 text-slate-500">
            <h4>Adopter un animal</h4>
            <h4>Faire Adopter son animal</h4>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
