import React from "react";
import HomePage from './screens/HomePage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Newspage from './screens/NewsPage/Newspage'
import './app.css'
import Ourstorypage from "./screens/OurstoryPage/Ourstorypage";
import Contactus from "./components/Footer/Contactus";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      {/* <Ourstorypage/> */}
      {/* <Newspage/> */}
      <Contactus/>
    </div>
  );
};
export default App;
