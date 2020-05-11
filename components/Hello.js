// https://code-log.hatenablog.com/entry/2020/01/05/215910
import React from 'react';
import {useTranslation} from 'react-i18next';

const Hello = React.FC = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="Hello">
      <p>{t('hello')}</p>
      <button onClick={() => changeLanguage('ja')}>ja</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  );
};

export default Hello;