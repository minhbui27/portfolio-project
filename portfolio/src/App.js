import Home from './components/Home'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import IntroductionDiv from './components/IntroductionDiv'
import ProjectsDiv from './components/ProjectsDiv'
import HobbiesDiv from './components/HobbiesDiv'
import { Route, Switch, useLocation} from 'react-router-dom'
import './index.css'
import {AnimatePresence} from 'framer-motion/dist/framer-motion'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  return (
    <>
      {/* <Nav/> */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route path="/Welcome">
            <Welcome/>
          </Route>
          <Route path="/Introduction">
            <IntroductionDiv/>
          </Route>
          <Route exact path="/Hobbies">
            <HobbiesDiv/>
          </Route>
          <Route exact path="/Projects">
            <ProjectsDiv/>
          </Route> */}
         
        </Switch>
      </AnimatePresence>
     
      <Footer/>
    </>
  );
}

export default App;
