import React, { Component } from "react";

export default class Prediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Administrative: "",
      Administrative_Duration: "",
      Informational: "",
      Informational_Duration: "",
      ProductRelated: "",
      ProductRelated_Duration: "",
      BounceRates: "",
      ExitRates: "",
      PageValues: "",
      SpecialDay: "",
      Month: "",
      OperatingSystems: "",
      Browser: "",
      Region: "",
      TrafficType: "",
      VisitorType: "",
      Weekend: ""
    };
  }

  onChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }
  submit(e) {
    e.preventDefault();
    alert("hi");
  }
  render() {
    return (
      <div className="container">
        <h1>Prediction</h1>

        <form style={{ width: "30%" }}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Administrative</label>
            <input
              type="number"
              className="form-control"
              id="Administrative"
              name="Administrative"
              placeholder="Administrative"
              value={this.state.Administrative}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Administrative Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="Administrative_Duration"
              name="Administrative_Duration"
              placeholder="Administrative Duration"
              value={this.state.Administrative_Duration}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Informational</label>
            <input
              type="number"
              className="form-control"
              id="Informational"
              name="Informational"
              placeholder="Informational"
              value={this.state.Informational}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Informational Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="Informational_Duration"
              name="Informational_Duration"
              placeholder="Informational Duration"
              value={this.state.Informational_Duration}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Product Related</label>
            <input
              type="number"
              className="form-control"
              id="ProductRelated"
              name="ProductRelated"
              placeholder="Product Related"
              value={this.state.ProductRelated}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Product Related Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="ProductRelated_Duration"
              name="ProductRelated_Duration"
              placeholder="ProductRelated_Duration"
              value={this.state.ProductRelated_Duration}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Bounce Rates</label>
            <input
              type="number"
              className="form-control"
              id="BounceRates"
              name="BounceRates"
              placeholder="Bounce Rates"
              value={this.state.BounceRates}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Exit Rates</label>
            <input
              type="number"
              className="form-control"
              id="ExitRates"
              name="ExitRates"
              placeholder="Exit Rates"
              value={this.state.ExitRates}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Page Values</label>
            <input
              type="number"
              className="form-control"
              id="PageValues"
              name="PageValues"
              placeholder="Page Values"
              value={this.state.PageValues}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Special Day</label>
            <input
              type="number"
              className="form-control"
              id="SpecialDay"
              name="SpecialDay"
              placeholder="Special Day"
              value={this.state.SpecialDay}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Month</label>
            <input
              type="text"
              className="form-control"
              id="Month"
              name="Month"
              placeholder="Month"
              value={this.state.Month}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Operating Systems</label>
            <input
              type="number"
              className="form-control"
              id="OperatingSystems"
              name="OperatingSystems"
              placeholder="Operating Systems"
              value={this.state.OperatingSystems}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Browser</label>
            <input
              type="number"
              className="form-control"
              id="Browser"
              name="Browser"
              placeholder="Browser"
              value={this.state.Browser}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Region</label>
            <input
              type="number"
              className="form-control"
              id="Region"
              name="Region"
              placeholder="Region"
              value={this.state.Region}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Traffic Type</label>
            <input
              type="number"
              className="form-control"
              id="TrafficType"
              name="TrafficType"
              placeholder="Traffic Type"
              value={this.state.TrafficType}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Visitor Type</label>
            <input
              type="text"
              className="form-control"
              id="VisitorType"
              name="VisitorType"
              placeholder="Visitor Type"
              value={this.state.VisitorType}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Weekend</label>
            <input
              type="text"
              className="form-control"
              id="Weekend"
              name="Weekend"
              placeholder="Weekend"
              value={this.state.Weekend}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.submit.bind(this)}
          >
            Predict
          </button>
        </form>
      </div>
    );
  }
}
