import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Nav from './Nav';

const webContent = `vdgavdhagdahygahgdahdgahsjdgashdgvs hash  ghdhs bjuhdg uadhguadgausidgauyidgtyuisdgh d ayhdgaydgydgadh ud hud hujh`; 
const headText = `The Amazin' Web Dev`;
const linkNames = [
  'Home',
  'Portfolio',
  'Contact'
];

function App() {
  return (
    <div className="container-fluid">
      <Header 
        title={headText}
      />
      <Nav
        links={linkNames}
      />
      <Body 
        content={webContent}
      />
      <Footer />
    </div>
  );
}

export default App;
