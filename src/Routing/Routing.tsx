import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'src/components/general/mainLayout';
import Main from 'src/pages/Main/Main';

const Routing: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </MainLayout>
  );
};

export default Routing;
