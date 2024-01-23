import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Blog from "./pages/Blog";
import Projects from "./pages/Projects"
import Construction from './pages/Construction';

function Navbar () {
  return (
      <div className="navBar">        
        <Link to="/" className='navLinkButton'>Home</Link>
        <Link to="/about" className='navLinkButton'>About</Link>
        <Link to="/projects" className='navLinkButton'>Projects</Link>
        <Link to="/blog" className='navLinkButton'>Blog</Link>
      </div>
   )
}

function MyButton(){
  function handleclick(){
    alert('You\'ve clicked me! You bastard!')
  }
  return (
    <button className="testButton" onClick={handleclick}>
      I'm a button
      <br />
      It's important that your component function be named with CamelCase
    </button>
  )
}

function App() {
  return (
    <Router>
      <div className='header'>
        <Link to="/" className='logo'>:/Jacob{'>'}</Link>
        <Navbar />
      </div>
      <div className="AppPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/blog' element={<Construction />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <MyButton />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
          
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
