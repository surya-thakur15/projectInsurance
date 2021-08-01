import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import GetGraph from "../../apiCalls/GetGraph"
import "../../css/home.css"

const data = [
  {
    name: "Page A",
    count: 2400,
  },
  {
    name: "Page B",
    count: 1398,
  },
  {
    name: "Page C",
    count: 9800,
  },
  {
    name: "Page D",
    count: 3908,
  },
  {
    name: "Page E",
    count: 4800,
  },
  {
    name: "Page F",
    count: 3800,
  },
  {
    name: "Page G",
    count: 4300,
  },
];

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: 1,
      region: "North",
      data: []
    };
  }

  async componentDidMount() {
    const data = await GetGraph(this.state.month, this.state.region);
    const apiResponse = await data.json();
    const response = apiResponse.response;
    console.log("graph res", response);
    this.setState({ data: response})
  }

  handleSubmit = async () => {


    console.log("here22");
    
    const data = await GetGraph(this.state.month, this.state.region);
    const apiResponse = await data.json();
    const response = apiResponse.response;
    console.log("graph res", response);
    this.setState({ data: response })
  
  }

  render() {
    return (
      <div>
        <div className="select-tags">
          <div className="select">
            <select
              name="month"
              onChange={(e) => {
                this.setState({ month: e.target.value });
              }}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>

          <div
            className="select"
            onChange={(e) => {
              this.setState({ region: e.target.value });
            }}
          >
            <select name="region">
              <option value="North" >North</option>
              <option value="East">East</option>
              <option value="South">South</option>
              <option value="West">West</option>
            </select>
          </div>
          <button className="btn-edit" onClick={(e) => {this.handleSubmit(e)}}> Submit </button>
        </div>


        <div className="graph">
          <LineChart
            width={600}
            height={500}
            data={this.state.data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#ff7300"
              yAxisId={0}
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
export default withRouter(Graph);