import React from 'react';
import styles from './_styles.module.scss';
import Button from '@/components/Button';
import clsx from 'clsx';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

type Lang = 'en' | 'ua';

const possibleLanguages: {
  title: string;
  value: Lang;
}[] = [
  {
    title: 'УКР',
    value: 'ua',
  },
  {
    title: 'ENG',
    value: 'en',
  },
];

const LanguageToggle: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const selectLang = (lang: Lang) => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <div className={styles.lang_toggle}>
      {possibleLanguages.map(lang => (
        <Button
          key={lang.value}
          secondary
          onClick={() => selectLang(lang.value)}
          className={clsx(styles.lang_btn, {
            [styles.active]: locale === lang.value,
          })}
          icon={locale === lang.value ? 'bullet' : undefined}
          iconPosition="right"
        >
          {lang.title}
        </Button>
      ))}
    </div>
  );
};

export default LanguageToggle;
