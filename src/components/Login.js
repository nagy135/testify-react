import Button from '@material-ui/core/Button';
import axios from "axios";
import { connect } from "react-redux";

import { LOG_IN_STATE } from "../store";

const logInDispatch = () => ({
  type: LOG_IN_STATE,
});

const Login = ({ logInDispatch }) => {

    const logIn = async () => {

        console.log('loggin up');
        const response = await axios.post(`http://127.0.0.1:8081/api/login`, {
            email: 'viktor.nagy1995@gmail.com',
            password: 'bublinka'
        });
        console.log(response);
        logInDispatch();
    }

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                logIn();
            }}>
            Login
        </Button>
    );
}
export default connect(null, {logInDispatch})(Login);
