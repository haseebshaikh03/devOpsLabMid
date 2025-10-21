import React from 'react';
import Header from '../src/components/Header';
import SalimovHead from '../src/SalimovHead';
import Preloader from '../src/components/Preloader';
import Footer from '../src/components/Footer'; // Assuming you have a Footer component

const Home = () => {
  return (
    <div>
      <SalimovHead />
      <Header />
      <Preloader />
      <main>
        <h1>Welcome to Our Next.js Application</h1>
        <p>This is the homepage of our application.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;