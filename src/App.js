// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <DropdownMenu isOpen={isOpen} toggle={toggle}/>
      {/* <Content/> */}
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/products' component={Products}/>
        <Route path='/solutions' component={Solutions}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
