import React from 'react';
import styles from './_styles.module.scss';
import Button from '@/components/Button';
import clsx from 'clsx';

type Lang = 'en' | 'uk-UA';

const possibleLanguages: {
  title: string;
  value: Lang;
}[] = [
  {
    title: 'УКР',
    value: 'uk-UA',
  },
  {
    title: 'ENG',
    value: 'en',
  },
];

const LanguageToggle: React.FC = () => {
  const [currentLang, setCurrentLang] = React.useState<Lang>('uk-UA');

  const selectLang = (lang: Lang) => {
    setCurrentLang(lang);
  };

  return (
    <div className={styles.lang_toggle}>
      {possibleLanguages.map(lang => (
        <Button
          key={lang.value}
          secondary
          onClick={() => selectLang(lang.value)}
          className={clsx(styles.lang_btn, {
            [styles.active]: currentLang === lang.value,
          })}
          icon={currentLang === lang.value ? 'bullet' : undefined}
          iconPosition="right"
        >
          {lang.title}
        </Button>
      ))}
    </div>
  );
};

export default LanguageToggle;
