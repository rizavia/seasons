import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js";
import "./style/App.css";

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude }); //state can only be updated using setState
        this.setState({ long: pos.coords.longitude }); //state can only be updated using setState
        console.log(pos);
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long)
      return (
        <div>
          <h3>ERROR: {this.state.errorMessage}</h3>
        </div>
      );
    else if (this.state.lat && this.state.long && !this.state.errorMessage)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        </div>
      );
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
