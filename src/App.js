import './App.css';
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
        </Container>
    );
}

export default App;
