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
    <header className="bg-[#2153a0] p-4 mb-10 flex justify-between items-center">
      <div>
        <img src={logo} alt="Logo" style={{ width: '60px', height: '50px' }} />
      </div>
      <div className="flex justify-center">
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
