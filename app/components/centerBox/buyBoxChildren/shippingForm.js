import React, { Component } from 'react';
class shippingForm extends Component{

	getFormInfo = (event) =>{
		event.preventDefault();
		var formArray = $("#shippingForm").serializeArray();
		var formObject = {};

		for (var i = 0; i < formArray.length; i++){
			formObject[formArray[i]['name']] = formArray[i]['value'];
		}
		console.log(formObject);
		this.props.setShippingInfo(formObject);
		this.props.nextHandler();
	}

	checkFields = (event) => {
		event.preventDefault();
		var isValidated=true;
		$(".required").each(function(){
			if($(this).val() === ''){
				isValidated = false;
			}
		})

		if(isValidated){
			$("#nextButton").removeAttr('disabled');
		} else {
			$("#nextButton").attr('disabled', 'disabled');
		}

	}

	render = () => {
		return(
			<div className="centerThis">
				<div className="amazonYellowBorder fifty-percent decentPadding">
					<h2 className="center">Enter your Shipping Information</h2>
					<form id="shippingForm" onSubmit={this.getFormInfo}>
						<div className="formLine">
							<div className="formLineElement">
						 		<label htmlFor="customerName">
									<span>Customer Name:</span>
									<input onInput={this.checkFields} type="text" id="customerName" name="customerName" className="required"></input>
								</label>
							</div>
							<div className="formLineElement">
								<label htmlFor="phoneNumber">
									<span>Phone Number:</span> 
									<input onInput={this.checkFields} type="text" id="phoneNumber" name="phoneNumber" className="required"></input>
								</label>
							</div>
						</div>
						<div className="formLineElement">
							<label htmlFor="address1">
								<span>Address Line 1:</span>
								<input onInput={this.checkFields} type="text" id="address1" name="address1" className="required"></input>
							</label>
						</div>
						<div className = "formLineElement">
							<label htmlFor="address2">
								<span>Address Line 2(optional):</span>
								<input onInput={this.checkFields} type="text" id="address2" name="address2"></input>
							</label>
						</div>
						<div className="formLine">
							<div className="formLineElement">
								<label htmlFor="city">
									<span>City:</span>
									<input onInput={this.checkFields} type="text" id="city" name="city" className="required"></input>
								</label>
							</div>
							<div className="formLineElement">
								<label htmlFor="city">
									<span>State:</span>
									<input onInput={this.checkFields} type="text" id="state" name="state" className="required"></input>
								</label>
							</div>
							<div className="formLineElement">
								<label htmlFor="city">
									<span>Zip:</span>
									<input onInput={this.checkFields} type="text" id="zip" name="zip" className="required"></input>
								</label>
							</div>
						</div>
						
					</form> 
					<div className="center-align">
						<a disabled onClick={this.getFormInfo} id="nextButton" className="btn orange">Next &gt;</a>
					</div>
				</div>
			</div>
			)
	}
};

export default shippingForm;