// import logo from './logo.svg';
import React, {useState, useEffect, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
// import Solutions from './pages/solutions';
import Blog from './pages/blog';
import Contact from './pages/Contact';
// import DropdownMenu from './components/Dropdownmenu';
import Footer from './components/Footer';
import Career from './pages/Career';
import Intern from "./pages/Intern";

import ScrollToTop from './components/ScrollToTop';
import Article from './components/blog/article';
import MobileMenu from './components/mobileMenu';
import Notfound from './pages/Notfound';


const Navbar = React.lazy(()=> import ('./components/Navbar'));


function App() {

  
  const [isOpen, setIsOpen] = useState(false);

  

  const toggle = () =>{
    setIsOpen(!isOpen);
  }; 

  useEffect(() =>{
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }

    }
    window.addEventListener('resize',hideMenu)

    return () =>{
      window.removeEventListener('resize',hideMenu);
    }
  })
  

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      
      <Router>
        
          <ScrollToTop/>
          <Navbar toggle={toggle} isOpen={isOpen}/>
          <MobileMenu isOpen={isOpen} toggle={toggle}/>
          <Switch>
            <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/products' component={Products}/>
              <Route path='/career' component={Career}/>
              <Route exact path='/internship' component={Intern}/>
              <Route path='/blog' exact component={Blog}/>
              <Route path='/contact' component={Contact}/>
              <Route path="/blog/:slug" component={Article}/>
              <Route component={Notfound}/>

          </Switch>
          <Footer/>
        
      </Router>
    </Suspense>
    
  );
}

export default App;
