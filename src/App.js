import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Main from './components/Main';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";

function App({ loggedIn }) {
    return (
        <Container
            className="App"
            maxWidth="sm">
            <Navigation />
            {loggedIn
                ? <Main />
                : <Login />
            }
            <Footer />
        </Container>
    );
}

const mapReduxState = state => {
    return state;
};

export default connect(mapReduxState)(App);
