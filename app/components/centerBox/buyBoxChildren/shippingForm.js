var React = require("react");
var shippingForm = React.createClass({

	getFormInfo: function(event){
		event.preventDefault();
		var formArray = $("#shippingForm").serializeArray();
		var formObject = {};

		for (var i = 0; i < formArray.length; i++){
			formObject[formArray[i]['name']] = formArray[i]['value'];
		}
		console.log(formObject);
		this.props.setShippingInfo(formObject);
		this.props.nextHandler();
	},

	render: function(){
		return(
			<div className="centerThis amazonYellowBorder">
				<form id="shippingForm" onSubmit={this.getFormInfo}>
			 		<table>
						<tr>
							<td>Customer Name:</td>
							<td>Phone Number: </td>
						</tr>
			    		<tr>
			    			<td>
			    				<input type="text" name="customerName"></input>
			    			</td>
			    			<td>
			    				<input type="text" name="phoneNumber"></input>
			    			</td>
			    		</tr>
						<tr>
							<td>Address Line 1:</td>
							<td>Address Line 2(optional):</td>
						</tr>
						<tr>
							<td>
								<input type="text" name="address1" required></input>
							</td>
							<td>
								<input type="text" name="address2"></input>
							</td>
						</tr>
						<tr>
							<td>City:</td>
							<td>State:</td>
							<td>Zip:</td>
						</tr>
						<tr>
							<td>
								<input type="text" name="city" required></input>
							</td>
							<td>
								<input type="text" name="state" required></input>
							</td>
							<td>
								<input type="text" name="zip" required></input>
							</td>
						</tr>
					</table>
					<a onClick={this.getFormInfo} className="btn orange right">Next &gt;</a>
				</form> 
			</div>
			)
	}
});

module.exports = shippingForm;