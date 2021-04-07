import React from "react";
import HomePage from './screens/HomePage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Newspage from './screens/NewsPage/Newspage'
import './app.css'
import Storepage from './screens/StorePage/Storepage'
import Ourstorypage from "./screens/OurstoryPage/Ourstorypage";
import Contactus from "./components/Footer/Contactus";
import {Switch , Route} from 'react-router-dom'
import DetailNew from './screens/NewsPage/DetailNewsPage/Detailnews'
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
            path="/ourstory"
            component={Ourstorypage}
            />
            <Route
            // exact
            path="/news"
            component={Newspage}
            />
            <Route
            path="/store"
            component={Storepage}
            />
            
            <Route
            component={DetailNew}
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
