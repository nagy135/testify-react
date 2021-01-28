import Button from '@material-ui/core/Button';
import axios from "axios";

const Login = () => {

    const logUp = async () => {
        console.log('loggin up');
        const response = await axios.post(`http://127.0.0.1:8081/api/login`, {
            email: 'viktor.nagy1995@gmail.com',
            password: 'bublinka'
        });
        console.log(response);
    }

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                logUp();
            }}>
            Login
        </Button>
    );
}
export default Login;
