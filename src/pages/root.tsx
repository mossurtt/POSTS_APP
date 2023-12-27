import { useTranslation } from 'react-i18next';
import Button from '../components/Button/Button';
import '../index.css';
import CustomLink from '../components/Link/Link';

import { PATHS } from '../constants/paths';
import SelectLang from '../components/SelectLanguage/SelectLanguage';

function Root() {
  const onClick = () => {};

  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-screen bg-emerald-400">
      <div className="place-self-end pt-6 pr-6">
        <SelectLang />
      </div>
      <div
        id="root"
        className="flex flex-col items-center justify-center h-screen pl-3"
      >
        <div className="font-sans font-bold text-7xl text-white mb-4">
          {t('hello')}
        </div>
        <CustomLink to={PATHS.POSTS}>
          <Button onClick={onClick} title={t('show-posts')} />
        </CustomLink>
      </div>
    </div>
  );
}

export default Root;
