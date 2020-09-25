import React from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import Middle2 from './components/Middle2';
import Middle3 from './components/Middle3';
import Middle4 from './components/Middle4';
import Middle5 from './components/Middle5';
import Middle6 from './components/Middle6';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="container">
      <Header/>
      <Middle/>
      <Middle2/>
      <Middle3/>
      <Middle4/>
      <Middle3/>
      <Middle5/>
      <Middle6/>
      <Footer/>
      </div>

    </div>
    </>
  );
}

export default App;
