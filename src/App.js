import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Main from './components/Main';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Container
            className="App"
            maxWidth="sm">
            <Navigation />
            <Router>
                <Switch>
                    <Route
                        path="/login"
                        render={() => (
                            <Login/>
                        )} />
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </Container>
    );
}

export default App;
