import React from "react";
import Log from "./Log";

class LogList extends React.Component {
  render() {
    return (
      <div>
        {this.props.logs.map((log) => (
          <Log key={log["PK"]} log={log} />
        ))}
      </div>
    );
  }
}

export default LogList;
