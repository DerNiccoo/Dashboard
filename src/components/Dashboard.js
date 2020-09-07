import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TimeAgo from "react-timeago";
import gerStrings from "react-timeago/lib/language-strings/de";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(gerStrings);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-columns">
        <Card url="google.de" />
        <Card url="facebook.de" />
        <Card url="example.de" />
        <Card url="twitter.de" />
        <Card url="stackoverflow.de" />
        <Card url="youtube.de" />
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: "...",
      status: "...",
      updateded: "now",
    };
  }

  componentDidMount() {
    let start = performance.now();
    fetch("https://cors-anywhere.herokuapp.com/" + this.props.url, {
      method: "HEAD",
    }).then((data) => {
      let end = performance.now();
      this.setState({
        latency: end - start,
        status: data.status,
        updateded: new Date(),
      });
    });

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ refresher: new Date() });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.url}</h5>
          <p>Status: {this.state.status}</p>
          <p>Latency: {this.state.latency}ms</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Updated <TimeAgo date={this.state.updateded} />
          </small>
        </div>
      </div>
    );
  }
}

export default Dashboard;
