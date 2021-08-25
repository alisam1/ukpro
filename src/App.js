import React from "react"
import {Route, Switch} from 'react-router-dom'
import './App.scss'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Events from "./pages/Events"
import SMI from "./pages/SMI"
import Cooperation from "./pages/Cooperation"
import ObjectsPage from "./pages/ObjectsPage"


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
                <Route path='/objects' exact
                       render={() => <ObjectsPage/>}/>
                <Route path='/cooperation' exact
                       render={() => <Cooperation/>}/>

            </Switch>

            <Footer/>

        </div>
    );
}

export default App;