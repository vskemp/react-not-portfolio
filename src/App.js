import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import Body from './Body';
import Footer from './Footer';
import Nav from './Nav';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const webContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
// et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
// sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`; 
const headText = `The Amazin' Web Dev`;
const linkNames = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Blog',
    path: '/blog'
  }
];

function App() {
  return (
    <Router>
      <Header title={headText}/>
      <Nav links={linkNames} />
      {/* <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/blog">Blog</Link></li>
      </ul> */}
      {/* <div className="container-fluid"> */}
        {/* <Nav
          links={linkNames}
        />
        <Body 
          content={webContent}
        />
        <Footer />
      </div>  */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/:blogId">
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

function Home() {
  return <h1>You are Home</h1>;
}

// function Blog() {
//   return <h1>BLOOOOOOG</h1>;
// }


export default App;
