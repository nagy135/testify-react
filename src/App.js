import './App.css';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <Container
            className="App"
            maxWidth="sm">
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Footer/>
        </Container>
    );
}

export default App;
