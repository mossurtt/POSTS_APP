import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../Link/Link';
import logo from '../../assets/05_app_icon.png';
import { PATHS } from '../../constants/paths';

function Header() {
  return (
    <header className="bg-[#2153a0] pl-6 pr-6 mb-10 flex justify-between items-center">
      <div>
        <CustomLink to={PATHS.ROOT} isNotHoverable>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '60px', height: '50px' }}
          />
        </CustomLink>
      </div>
      <div className="flex justify-center">
        <CustomLink
          to={PATHS.POSTS}
          style={{
            textDecoration:
              window.location.pathname === '/posts' ? 'underline' : 'none',
          }}
        >
          Posts
        </CustomLink>
        <CustomLink
          to={PATHS.BEST}
          style={{
            textDecoration:
              window.location.pathname === '/best' ? 'underline' : 'none',
          }}
        >
          Best
        </CustomLink>
        <CustomLink to={PATHS.NEW_POST}>
          <FontAwesomeIcon icon={faPlus} />
        </CustomLink>
      </div>
    </header>
  );
}

export default Header;
