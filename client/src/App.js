import React, {useEffect, useState} from "react";
import HomePage from './screens/HomePage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Newspage from './screens/NewsPage/Newspage'
import './app.css'
import Storepage from './screens/StorePage/Storepage'
import Ourstorypage from "./screens/OurstoryPage/Ourstorypage";
import Contactus from "./components/Footer/Contactus";
import {Switch, Route} from 'react-router-dom'
import DetailNew from './screens/NewsPage/DetailNewsPage/Detailnews'

const App = (props) => {
    const {location} = props
    const [width, setWindowWidth] = useState(0)
    const [active, setActive] = useState(false)
    useEffect(() => {

        updateDimensions();
        // console.log(width)
        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);

    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    return (
        <div className="App">
            <Navbar active={active} setActive={setActive} screenWidth={width}/>
            <div onClick={() => {
                setActive(false)
            }}>
                <Switch location={location}>
                    <Route
                        exact
                        path="/"
                    >
                        <HomePage screenWidth={width}/>
                    </Route>
                    <Route
                        path="/ourstory"
                        
                    >
                        <Ourstorypage screenWidth={width}/>
                    </Route>
                    <Route
                        // exact
                        path="/news"
                    >
                        <Newspage screenWidth={width}/>
                    </Route>
                    <Route
                        path="/store"
                        
                    >
                        <Storepage screenWidth={width}/>
                    </Route>

                    <Route
                        component={DetailNew}
                    />
                    {/* <Ourstorypage/> */}
                    {/* <Newspage/> */}
                    {/* <Storepage/> */}
                </Switch>
                <Contactus/>
            </div>

        </div>
    );
};
export default App;
