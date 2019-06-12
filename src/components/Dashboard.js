import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseVariableUrl: "",
      specialDayUrl: "",
      exitRates: "",
      operatingSystemsUrl: "",
      trainStarted: false,
      lossPlotUrl: "",
      trainButtonVisible: true,
      results: ""
    };
  }

  getResponseVariablePlot() {
    console.log("getting resoinse");
    axios.get("http://127.0.0.1:5000/revenue").then(res => {
      console.log(res.data);
      this.setState({
        responseVariableUrl: res.data.url
      });
    });
  }

  getSpecialDay() {
    console.log("special day");
    axios.get("http://127.0.0.1:5000/special_day").then(res => {
      console.log(res.data);
      this.setState({
        specialDayUrl: res.data.url
      });
    });
  }

  getExitPlot() {
    console.log("exit");
    axios.get("http://127.0.0.1:5000/exit_rates").then(res => {
      console.log(res.data);
      this.setState({
        exitRates: res.data.url
      });
    });
  }

  getOSPlot() {
    console.log("getting OS");
    axios.get("http://127.0.0.1:5000/operating_systems").then(res => {
      console.log(res.data);
      this.setState({
        operatingSystemsUrl: res.data.url
      });
    });
  }

  startTrain() {
    this.setState(
      {
        trainStarted: true,
        trainButtonVisible: false
      },
      () => {
        axios.get("http://127.0.0.1:5000/training_plot").then(res => {
          console.log(res.data);
          this.setState({
            trainStarted: false,
            results: res.data.score,
            lossPlotUrl: res.data.url
          });
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ marginLeft: "40%", marginTop: 10 }}>Data Product </h1>
        <h1>Features</h1>
        <hr />
        <div className="row">
          <div className="col-6">
            <div>
              <h2>Response Variable</h2>
              {this.state.responseVariableUrl == "" ? (
                <button
                  onClick={this.getResponseVariablePlot.bind(this)}
                  className="btn btn-primary"
                >
                  Show Plot
                </button>
              ) : (
                <img
                  src="http://localhost:5000/revenue.png"
                  style={{ width: "60%" }}
                />
              )}
            </div>
          </div>
          <div className="col-6">
            <div>
              <h2>Special Day</h2>
              {this.state.specialDayUrl == "" ? (
                <button
                  onClick={this.getSpecialDay.bind(this)}
                  className="btn btn-primary"
                >
                  Show Plot
                </button>
              ) : (
                <img
                  src="http://localhost:5000/special_day.png"
                  style={{ width: "80%" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div>
              <h2>Exit Rates</h2>
              {this.state.exitRates == "" ? (
                <button
                  onClick={this.getExitPlot.bind(this)}
                  className="btn btn-primary"
                >
                  Show Plot
                </button>
              ) : (
                <img
                  style={{ width: "80%" }}
                  src="http://localhost:5000/exit.png"
                />
              )}
            </div>
          </div>

          <div className="col-6">
            <div>
              <h2>Operating Systems</h2>
              {this.state.operatingSystemsUrl == "" ? (
                <button
                  onClick={this.getOSPlot.bind(this)}
                  className="btn btn-primary"
                >
                  Show Plot
                </button>
              ) : (
                <img
                  src="http://localhost:5000/os.png"
                  style={{ width: "80%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
