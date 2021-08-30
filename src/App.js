import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Events from "./pages/Events"
import SMI from "./pages/SMI"
import ObjectsPage from "./pages/ObjectsPage"
import NewsPage from "./pages/NewsPage"


function App() {

    return (
        <div className="App">

            <Header/>

            <Switch>
                <Route path='/' exact
                       render={() => <HomePage/>}/>
                 <Route path='/events' exact
                       render={() => <Events/>}/>
                <Route path='/SMI' exact
                       render={() => <SMI/>}/>
                <Route path='/SMI/:id' exact
                       render={() => <NewsPage/>}/>
                <Route path='/objects' exact
                       render={() => <ObjectsPage/>}/>

            </Switch>

            <Footer/>

        </div>
    );
}

export default App;