import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import { Route, Switch, useLocation} from 'react-router-dom'
import About from './components/About'
import './index.css'
import {AnimatePresence} from 'framer-motion'
import Footer from './components/Footer'
import Game from './components/Game'

function App() {
  const location = useLocation()
  return (
    <>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
        </Switch>
      </AnimatePresence>
     
      <Footer/>
    </>
  );
}

export default App;
