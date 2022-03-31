import './App.scss';
import { Routes, Route} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//general components
import TheHeader from "./components/genreal/TheHeader"
import TheFooter from "./components/genreal/TheFooter"

//styled components
import {MyAside, MyView} from "./components/MyStyled.js";

//assets
import asideImg from "./assets/dog.jpg"

//components views
import UserChoice from './views/UserChoice';
import UserInfo from './views/UserInfo';
import UserCheck from './views/UserCheck';
import UserSuccess from './views/UserSuccess';
import NoMatch from './views/NoMatch';

const routes = [
  {path: '/', Element: UserChoice },
  {path: '/UserInfo', Element: UserInfo},
  {path: '/UserCheck', Element: UserCheck},
  {path: '/UserSuccess', Element: UserSuccess},
  {path: '/*', Element: NoMatch},
]

function App() {
  return (
   <div className='App'>

      <nav>
        <div className='container'>
          <TheHeader/>
        </div>
      </nav>

      <main className='View'>
          <MyView className='content'>
            <Routes >
              {routes.map(({path, Element}) => (
                <Route key={path} exact path={path} element={
                  <TransitionGroup>
                    <CSSTransition
                      timeout={300}
                      classNames="page"
                      key={path}
                    >
                      <div className="page">
                        <Element/>
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
                }>
                </Route>
              ))}
            </Routes>
          </MyView>
        <MyAside>
          <img src={asideImg}/>
        </MyAside>
      </main>

      <footer className='container'>
          <TheFooter/>
      </footer>

   </div>
  );
}

export default App;