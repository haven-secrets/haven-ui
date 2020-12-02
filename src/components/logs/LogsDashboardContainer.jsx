import React from "react";
import LogsDashboard from "./LogsDashboard";
import { connect } from "react-redux";
import { logs } from "../../data/logs.js";

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogs: () => {
      dispatch({
        type: "GET_ALL_LOGS",
        payload: logs,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogsDashboard);
