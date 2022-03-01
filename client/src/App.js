import React, { useEffect, useState, createContext, useContext } from "react";
import HomePage from "./screens/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Newspage from "./screens/NewsPage/Newspage";
import "./app.css";
import "antd/dist/antd.css";
import Storepage from "./screens/StorePage/Storepage";
import Ourstorypage from "./screens/OurstoryPage/Ourstorypage";
import Contactus from "./components/Footer/Contactus";
import { Switch, Route, useLocation } from "react-router-dom";
import DetailNew from "./screens/NewsPage/DetailNewsPage/Detailnews";

import {
  //   TransitionGroup,
  SwitchTransition,
  CSSTransition,
} from "react-transition-group";
import LoginPage from "./screens/LoginPage/LoginPage";
import { AdminPage } from "./screens/AdminPage/AdminPage";
// export function useUserContext() {
//   return useContext(userContext);
// }
const App = (props) => {
  const location = useLocation();
  const [width, setWindowWidth] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="App">
      <Navbar active={active} setActive={setActive} screenWidth={width} />
      <div
        onClick={() => {
          setActive(false);
        }}
      >
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
          >
            <Switch location={location}>
              <Route exact path="/">
                <HomePage screenWidth={width} />
                {/* <AdminPage /> */}

                {/* <LoginPage /> */}
              </Route>
              <Route path="/login">
                {/* <HomePage screenWidth={width} /> */}
                <LoginPage />
              </Route>
              <Route path="/admin">
                {/* <HomePage screenWidth={width} /> */}
                <AdminPage />
              </Route>
              <Route path="/ourstory">
                <Ourstorypage screenWidth={width} />
              </Route>
              <Route
                // exact
                path="/news"
              >
                <Newspage screenWidth={width} />
              </Route>
              <Route path="/store">
                <Storepage screenWidth={width} />
              </Route>
              <Route component={DetailNew} />
            </Switch>
          </CSSTransition>
        </SwitchTransition>
        <Contactus />
      </div>
    </div>
  );
};
export default App;
