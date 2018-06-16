import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <div>
        <h3> STEP 3: Tell us where to send your Stuff</h3>
        <form>
          <table>
            <tr>
              <td>First Name:</td> <td>Last Name:</td>
            </tr>

            <tr>
              <td>
                <input type="text" name="First Name" />
              </td>
              <td>
                <input type="text" name="Last Name" />
              </td>
            </tr>

            <tr>
              <td>Address Line 1:</td>
              <td>Address Line 2(optional):</td>
            </tr>

            <tr>
              <td>
                <input type="text" name="Address Line 1" required />
              </td>
              <td>
                <input type="text" name="Address Line 2" />{" "}
              </td>
            </tr>

            <tr>
              <td>City:</td>
              <td>State:</td>
            </tr>
            <tr>
              <td>
                <input type="text" name="City" required />
              </td>
              <td>
                <input type="text" name="State" required />
              </td>
            </tr>
            <tr>
              <td>Zip:</td>
            </tr>
            <tr>
              <td>
                <input type="text" name="Zip" required />
              </td>
            </tr>
          </table>
          <input type="submit" value="Submit" />
        </form>{" "}
      </div>
    );
  };
}

export default ShippingForm;
