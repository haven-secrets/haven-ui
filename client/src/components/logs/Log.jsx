import React from "react";
import { Segment } from "semantic-ui-react";

const SegmentExampleSegments = (params) => (
  <Segment.Group>
    <Segment color="black"></Segment>
    <Segment.Group>
      <Segment>
        <b>Project:</b> {params["Project"]}
      </Segment>
      <Segment>
        <b>Environment:</b> {params["Environment"]}
      </Segment>
      <Segment>
        <b>EventType:</b> {params["EventType"]}
      </Segment>
      <Segment>
        <b>DateTime:</b> {params["DateTime"]}
      </Segment>
      <Segment>
        <b>UserName:</b> {params["UserName"]}
      </Segment>
      <Segment>
        <b>SecretName:</b> {params["SecretName"]}
      </Segment>
      <Segment>
        <b>Version:</b> {params["Version"]}
      </Segment>
      <Segment>
        <b>Response:</b> {params["Response"]}
      </Segment>
    </Segment.Group>
  </Segment.Group>
);

class Log extends React.Component {
  render() {
    return <div>{SegmentExampleSegments(this.props.log)}</div>;
  }
}

export default Log;
