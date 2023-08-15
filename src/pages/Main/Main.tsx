import React, { FC } from 'react';
import Footer from 'src/components/general/footer';
import Header from 'src/components/general/header';
import SimpleInfoCard from 'src/components/general/infoCards/SimpleInfoCard';
import TextInfoCard from 'src/components/general/infoCards/TextInfoCard';
import SubHeader from 'src/components/general/subHeader';
import styles from './styles.module.scss';

const Main: FC = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <div className={styles.content}>
        <div className="col-60">
          <SimpleInfoCard withImage />
          <TextInfoCard />
          <TextInfoCard />
          <img src="/images/Strategy.png" alt="strategy" />
        </div>
        {/* <div className="col-48"></div> */}
      </div>
      <Footer />
    </>
  );
};

export default Main;
