import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
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
                            <Button variant="contained" color="primary">
                                LOGIN
                            </Button>
                        )} />
                    <Route path="/">
                        <Button variant="contained" color="primary">
                            NORMAL
                        </Button>
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </Container>
    );
}

export default App;
