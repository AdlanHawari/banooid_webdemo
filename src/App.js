// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/solutions';
import Blog from './pages/blog';
import Contact from './pages/contact';
import DropdownMenu from './components/Dropdownmenu';
import Footer from './components/Footer';
import preorder from './pages/preorder';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Article from './components/blog/article';



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
    

      
      <Router>
        <ScrollToTop/>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <DropdownMenu isOpen={isOpen} toggle={toggle}/>
        {/* <Content/> */}
        <Switch>
        {/* <div className="max-w-screen-xl mx-auto"> */}
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/products' component={Products}/>
          <Route path='/solutions' component={Solutions}/>
          <Route path='/blog' exact component={Blog}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/preorder' component={preorder}/>
          <Route path="/blog/:slug" component={Article}/>
          {/* </div> */}

        </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
