import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundaryComponent from './hoc/ErrorBoundary';
import Routing from './Routing/Routing';
import './styles/index.scss';

const App: FC = () => {
  return (
    <ErrorBoundaryComponent>
      <Routing />
    </ErrorBoundaryComponent>
  );
};
export default App;
