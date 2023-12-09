import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../Link/Link';
import logo from '../../assets/05_app_icon.png';

function Header() {
  return (
    <header className="bg-[#2153a0] p-4 mb-10 flex justify-between items-center">
      <div>
        <img src={logo} alt="Logo" style={{ width: '60px', height: '50px' }} />
      </div>
      <div className="flex justify-center">
        <CustomLink
          to="/posts"
          style={{
            textDecoration:
              window.location.pathname === '/posts' ? 'underline' : 'none',
          }}
        >
          Posts
        </CustomLink>
        <CustomLink
          to="/best"
          style={{
            textDecoration:
              window.location.pathname === '/best' ? 'underline' : 'none',
          }}
        >
          Best
        </CustomLink>
        <CustomLink to="/new-post">
          <FontAwesomeIcon icon={faPlus} />
        </CustomLink>
      </div>
    </header>
  );
}

export default Header;
