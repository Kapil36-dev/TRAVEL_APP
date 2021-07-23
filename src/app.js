import React from 'react';
import Navbar from './components/navbar/navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './app.css'
import {Home ,SignUp,Services,Products} from './components';


class App extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path ='/Services' exact component={Services}/>
                        <Route path ='/Products' exact component={Products}/>
                        <Route path ='/Sign-up' exact component={SignUp}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App