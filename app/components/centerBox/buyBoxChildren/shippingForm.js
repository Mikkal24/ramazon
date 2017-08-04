var React = require("react");
var shippingForm = React.createClass({
	render: function(){
		return(
			<div className="centerThis amazonYellowBorder">
				<form>
					<ul className="form-style-1">
					    <li><label>Full Name <span className="required">*</span></label><input type="text" name="field1" className="field-divided" placeholder="First" />&nbsp;<input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
					    <li>
					        <label>Email <span className="required">*</span></label>
					        <input type="email" name="field3" className="field-long" />
					    </li>
					    <li>
					        <label>Subject</label>
					        <select name="field4" className="field-select">
					        <option value="Advertise">Advertise</option>
					        <option value="Partnership">Partnership</option>
					        <option value="General Question">General</option>
					        </select>
					    </li>
					    <li>
					        <label>Your Message <span className="required">*</span></label>
					        <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
					    </li>
					    <li>
					        <input type="submit" value="Submit" />
					    </li>
					</ul>
					</form>
			</div>
			)
	}
});

module.exports = shippingForm;