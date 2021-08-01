import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../css/home.css";
import GetAll from "../../apiCalls/GetAll";

const data = [
  {
    policyId: 420,
    customerId: 418,
    dateOfPurchase: "2018-01-24",
    vehicleSegment: "A",
    premium: "584",
    incomeGroup: "$25 - $70K",
  },
  {
    policyId: 840,
    customerId: 420,
    dateOfPurchase: "2018-01-04",
    vehicleSegment: "A",
    premium: "2089",
    incomeGroup: "$25-$70K",
  },
  {
    policyId: 12345,
    customerId: 400,
    dateOfPurchase: "2018-01-16",
    vehicleSegment: "A",
    premium: "958",
    incomeGroup: "0- $25K",
  },
  {
    policyId: 12346,
    customerId: 401,
    dateOfPurchase: "2018-01-04",
    vehicleSegment: "A",
    premium: "1272",
    incomeGroup: "$25-$70K",
  },
  {
    policyId: 12347,
    customerId: 402,
    dateOfPurchase: "2018-01-07",
    vehicleSegment: "A",
    premium: "2150",
    incomeGroup: ">$70K",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pid: "",
      resData: [],
      searchKey: "",
    };
  }

  async componentDidMount() {
    const data = await GetAll();
    const apiResponse = await data.json();
    console.log("Response", apiResponse.response);
    this.setState({
      resData: apiResponse.response,
    });
  }

  editHandler = (e) => {
    let idHTML = e.target.parentElement.parentElement.childNodes[0].childNodes[0].innerHTML;
    console.log(idHTML)
    let [_, value] =
      idHTML && idHTML.length && idHTML.indexOf(":") > 0 ? idHTML.split(":") : "";

    console.log("value of pid ", this.state.pid, "value", value);

    if (value && value.length) {
      this.setState({
        pid: value,
      });
      this.props.history.push({
        pathname: "/edit",
        state: { pid: value },
      });
    }
  };

  handleChange = (e) => {
    console.log("target", e.target.value);
    this.setState({
      searchKey: e.target.value,
    });
  };

  getGraph = () => {
    this.props.history.push({
      pathname: "/graph",
    });
  }

  render() {
    return (
      <div className="home">
        <h1 className="heading">Insurance Plans</h1>
        <div className="search-bar">
          <input type="text" id="search-bar"
            onChange={(e) => { this.handleChange(e) }}
            placeholder="Search by Policy Id or Customer Id" />
        </div>

        <div className="graph-btn">
          <button className="btn-edit" onClick={this.getGraph}>Get Graphs</button>
        </div>

        <div className="data-grid">
          {this.state.resData.map((item, key) => {
            return (
              ((this.state.searchKey.length > 0
                ? item.policyId.toString().indexOf(this.state.searchKey) >= 0
                : true) ||
                (this.state.searchKey.length > 0
                  ? item.customerId.toString().indexOf(this.state.searchKey) >=
                    0
                  : true)) && (
                <div className="data-card" key={key}>
                  <div className="data-div">
                    <div id="pid">Policy Id: {item.policyId}</div>
                    <div>Customer Id: {item.customerId}</div>
                    <div>DOP: {item.dateOfPurchase}</div>
                    <div>Vehicle: {item.vehicleSegment}</div>
                    <div>Fuel: {item.premium}</div>
                    <div>Income: {item.incomeGroup}</div>
                  </div>
                  <div className="edit-button">
                    <button
                      className="btn-edit"
                      onClick={(e) => this.editHandler(e)}
                    >
                      Open
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
