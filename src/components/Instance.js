import axios from "axios";
import { withRouter } from "react-router-dom";

const Instance = axios.create({
  baseURL: "https://afternoon-dawn-41697.herokuapp.com/api/auth/register",
});

export default withRouter(Instance);

// process.env.REACT_APP_BASE_URL,
