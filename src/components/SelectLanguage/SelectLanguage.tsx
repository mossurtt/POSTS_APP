import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

function SelectLang() {
  const { i18n } = useTranslation();

  const onClickLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select
      className="text-blue-500 bg-white font-extrabold p-1 border-white rounded"
      onChange={onClickLanguageChange}
    >
      <option value="en">EN</option>
      <option value="pl">PL</option>
      <option value="uk">UK</option>
    </select>
  );
}

export default SelectLang;
