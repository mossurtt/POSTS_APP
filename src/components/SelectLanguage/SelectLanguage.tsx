import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function SelectLang() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language,
  );

  const onClickLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage && storedLanguage !== selectedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
  }, [i18n, selectedLanguage]);

  return (
    <select
      className="text-blue-500 bg-white font-extrabold p-1 mr-5 border-white rounded"
      onChange={onClickLanguageChange}
      value={selectedLanguage}
    >
      <option value="en">EN</option>
      <option value="pl">PL</option>
      <option value="uk">UK</option>
    </select>
  );
}

export default SelectLang;
