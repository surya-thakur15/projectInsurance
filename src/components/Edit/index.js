import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GetOnePolicy from "../../apiCalls/GetOnePolicy";
import UpdatePolicy from "../../apiCalls/UpdatePolicy";
import "../../css/edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: {},
    };
    
  }

  async componentDidMount() {
    console.log("Props: ", this.props.location.state.pid);
    const data = await GetOnePolicy(this.props.location.state.pid);
    const apiResponse = await data.json();
    console.log(
      "re--",
      apiResponse.response[0],
      typeof apiResponse.response[0]
    );

    this.setState({
      allData: apiResponse.response[0],
    });

    console.log("all", this.state.allData.policyID);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(document.getElementById("detail-form"))

    let policyid = data.get("policyid")
    let dop = data.get("dop")
    let cstmid = data.get("cstmid")
    let fuel = data.get("fuel")
    let segment = data.get("segment")
    let premium = data.get("premium")
    let bodilyinjury = data.get("bodilyinjury")
    let personalinjury = data.get("personalinjury")
    let propertydamage = data.get("propertydamage")
    let collision = data.get("collision")
    let comprehensive = data.get("comprehensive")
    let income = data.get("income")
    let maritalstatus = data.get("maritalstatus")
    let gender = data.get("gender")
    let region = data.get("region")


    let data_obj = {
      policyId : policyid,
      dateOfPurchase : dop,
      customerId : cstmid,
      fuel : fuel,
      vehicleSegment : segment,
      premium : premium,
      bodilyInjuryLiability : bodilyinjury,
      personalInjuryProtection : personalinjury,
      propertyDamageLiability : propertydamage,
      collision : collision,
      comprehensive : comprehensive,
      incomeGroup: income,
      maritalStatus : maritalstatus,
      gender : gender,
      region : region
    }

    UpdatePolicy(data_obj);
  }
  render() {
    return (
      <div>
        <div className="data-form">
          <form id="detail-form">
            <div className="segment">
              <h1>Policy Details</h1>
            </div>

            <label>
              <span className="field-name">Policy ID</span>
              <input
                name="policyid"
                className="input"
                type="text"
                placeholder="Policy ID"
                maxLength="5"
                pattern="[0-9]"
                title="Please enter correct Policy ID (Only Number)"
                defaultValue={this.state.allData.policyID}
              />
            </label>

            <label>
              <span className="field-name">Date of Purchase</span>
              <input
                name="dop"
                className="input"
                type="text"
                placeholder="Date Of Purchase"
                defaultValue={this.state.allData.dateOfPurchase}
                readOnly
              />
            </label>

            <label>
              <span className="field-name">Customer ID</span>
              <input
                name="cstmid"
                className="input"
                type="text"
                placeholder="Customer ID"
                maxLength="3"
                pattern="[0-9]"
                title="Please enter correct Customer ID (Only Numbers)"
                defaultValue={this.state.allData.customerID}
              />
            </label>

            <label>
              <span className="field-name">Fuel</span>
              <input
                name="fuel"
                className="input"
                type="text"
                maxLength="10"
                pattern="[a-zA-Z ]+"
                title="Please enter correct Fuel (Only Characters)"
                placeholder="Fuel"
                defaultValue={this.state.allData.fuel}
              />
            </label>

            <label>
              <span className="field-name">Vehicle Segment</span>
              <input
                name="segment"
                className="input"
                type="text"
                placeholder="Vehicle Segment"
                maxLength="3"
                pattern="[A-Z ]+"
                title="Please enter correct Vehicle Segment (A to Z)"
                defaultValue={this.state.allData.vehicleSegment}
              />
            </label>

            <label>
              <span className="field-name">Premium</span>
              <input
                name="premium"
                className="input"
                type="text"
                maxLength="6"
                placeholder="Premium"
                defaultValue={this.state.allData.premium}
              />
            </label>

            <label>
              <span className="field-name">Bodily Injury Liability</span>
              <input
                name="bodilyinjury"
                className="input"
                type="text"
                placeholder="Bodily Injury Liability"
                maxLength="1"
                pattern="[0-1]"
                title="Please enter correct Bodily Injury Liability (0 or 1)"
                defaultValue={this.state.allData.bodilyInjuryLiability}
              />
            </label>

            <label>
              <span className="field-name">Personal Injury Protection</span>
              <input
                name="personalinjury"
                className="input"
                type="text"
                placeholder="Personal Injury Protection"
                maxLength="1"
                pattern="[0-1]"
                title="Please enter correct Personal Injury Protection (0 or 1)"
                defaultValue={this.state.allData.personalInjuryProtection}
              />
            </label>

            <label>
              <span className="field-name">Property Damage Liability</span>
              <input
                name="propertydamage"
                className="input"
                type="text"
                placeholder="Property Damage Liability"
                maxLength="1"
                pattern="[0-1]"
                title="Please enter correct Personal Injury Protection (0 or 1)"
                defaultValue={this.state.allData.propertyDamageLiability}
              />
            </label>

            <label>
              <span className="field-name">Collision</span>
              <input
                name="collision"
                className="input"
                type="text"
                placeholder="Collision"
                maxLength="1"
                pattern="[0-1]"
                title="Please enter correct Collision (0 or 1)"
                defaultValue={this.state.allData.collision}
              />
            </label>

            <label>
              <span className="field-name">Comprehensive</span>
              <input
                name="comprehensive"
                className="input"
                type="text"
                placeholder="Comprehensive"
                maxLength="1"
                pattern="[0-1]"
                title="Please enter the correct Comprehensive (0 or 1)"
                defaultValue={this.state.allData.comprehensive}
              />
            </label>

            <label>
              <span className="field-name">Income Group</span>
              <input
                name="income"
                className="input"
                type="text"
                placeholder="Income Group"
                defaultValue={this.state.allData.incomeGroup}
              />
            </label>

            <label>
              <span className="field-name">Marital Status</span>
              <input
                name="maritalstatus"
                className="input"
                type="text"
                placeholder="Marital Status"
                defaultValue={this.state.allData.maritalStatus}
                maxLength="1"
                pattern="[0-1]"
                title="Please enter the correct Marital Status (0 or 1)"
              />
            </label>

            <label>
              <span className="field-name">Gender</span>
              <input
                name="gender"
                className="input"
                type="text"
                placeholder="Gender"
                defaultValue={this.state.allData.gender}
                maxLength="10"
                pattern="[a-zA-Z ]"
                title="Please enter the correct Gender"
              />
            </label>

            <label>
              <span className="field-name">Region</span>
              <input
                name="region"
                className="input"
                type="text"
                placeholder="Region"
                defaultValue={this.state.allData.region}
                maxLength="10"
                pattern="[a-zA-Z ]"
                title="Please enter the correct Region"
              />
            </label>

            <input value="Save" className="form-btn red" type="submit" onClick={(e) => this.handleSubmit(e)} />
              
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Edit);
