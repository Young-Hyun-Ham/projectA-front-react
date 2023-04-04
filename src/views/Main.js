import React from 'react';
import Header from '../layout/Header';
import MainContent from '../layout/MainContent';
import Footer from '../layout/Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
