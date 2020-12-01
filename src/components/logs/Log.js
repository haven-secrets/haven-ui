import React from "react";
import { Segment } from "semantic-ui-react";

const SegmentExampleSegments = (params) => (
  <Segment.Group>
    <Segment color="black"></Segment>
    <Segment.Group>
      <Segment><b>Project:</b> {params["Project"].S}</Segment>
      <Segment><b>SecretName:</b> {params["SecretName"].S}</Segment>
      <Segment><b>DateTime:</b> {params["DateTime"].S}</Segment>
      <Segment><b>Response:</b> {params["Response"].S}</Segment>
      <Segment><b>EventType:</b> {params["EventType"].S}</Segment>
      <Segment><b>Version:</b> {params["Version"].S}</Segment>
      <Segment><b>PK:</b> {params["PK"].S}</Segment>
      <Segment><b>UserName:</b> {params["UserName"].S}</Segment>
      <Segment><b>Environment:</b> {params["Environment"].S}</Segment>
    </Segment.Group>
  </Segment.Group>
);

class Log extends React.Component {

  render() {
    return (
      <div>
        {SegmentExampleSegments(this.props.log)}
      </div>

    );
  }
}

export default Log;
{/*  */}
