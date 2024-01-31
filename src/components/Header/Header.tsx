import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import CustomLink from '../Link/Link';
import logo from '../../assets/05_app_icon.png';
import { PATHS } from '../../constants/paths';
import SelectLang from '../SelectLanguage/SelectLanguage';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-[#2153a0] pl-6 pr-6 mb-10 flex justify-between items-center">
      <div>
        <CustomLink to={PATHS.ROOT} isNotHoverable>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '70px', height: '50px' }}
          />
        </CustomLink>
      </div>
      <div className="justify-center">
        <SelectLang />
        <CustomLink
          to={PATHS.POSTS}
          style={{
            textDecoration:
              window.location.pathname === '/posts' ? 'underline' : 'none',
          }}
        >
          {t('posts')}
        </CustomLink>
        <CustomLink
          to={PATHS.BEST}
          style={{
            textDecoration:
              window.location.pathname === '/best' ? 'underline' : 'none',
          }}
        >
          {t('best')}
        </CustomLink>
        <CustomLink to={PATHS.NEW_POST}>
          <FontAwesomeIcon icon={faPlus} />
        </CustomLink>
      </div>
    </header>
  );
}

export default Header;
