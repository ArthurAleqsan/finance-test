import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components/common/Button';

const ErrorMessage: FC = () => {
  const { t }: any = useTranslation();
  const update = (): void => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace('/');
  };
  return (
    <div className="error-boundary">
      <p>{t('errorBoundaryText')}</p>
      <Button size="lg" className="success-filled-btn" onClick={update}>
        {t('update')}
      </Button>
    </div>
  );
};

export default ErrorMessage;
