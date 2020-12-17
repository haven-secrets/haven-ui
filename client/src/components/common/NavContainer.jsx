import { connect } from "react-redux";
import axios from "axios";
import Nav from "./Nav";

const mapStateToProps = (state) => {
  return {
    role: state.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRole: () => {
      return axios.get("http://localhost:5000/api/getRole").then((res) => {
        dispatch({ type: "GET_ROLE", payload: res.data });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
