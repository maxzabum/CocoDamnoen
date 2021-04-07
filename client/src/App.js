import React from "react";
import HomePage from './screens/HomePage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Newspage from './screens/NewsPage/Newspage'
import './app.css'
import Storepage from './screens/StorePage/Storepage'
import Ourstorypage from "./screens/OurstoryPage/Ourstorypage";
import Contactus from "./components/Footer/Contactus";
import {Switch , Route} from 'react-router-dom'
import DetailNewpage from './screens/NewsPage/DetailNewsPage/Detailnews'
const App = (props) => {
  const {location} = props
  return (
    <div className="App">
      <Navbar/>
        <Switch location={location}>
          <Route
            exact
            path="/"
            component={HomePage}
            />
            <Route
            exact
            path="/ourstory"
            component={Ourstorypage}
            />
            <Route
            exact
            path="/news"
            component={Newspage}
            />
            <Route
            exact
            path="/store"
            component={Storepage}
            />
            <Route
            exact
            path="/news/detail"
            component={DetailNewpage}
            />
        {/* <Ourstorypage/> */}
        {/* <Newspage/> */}
        {/* <Storepage/> */}
      </Switch>
      <Contactus/>

    </div>
  );
};
export default App;
