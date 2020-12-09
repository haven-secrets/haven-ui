import LogsDashboard from "./LogsDashboard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogs: () => {
      fetch("http://localhost:5000/api/fetchLogs")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: "GET_ALL_LOGS",
            payload: data,
          })
        );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogsDashboard);
