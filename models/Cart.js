module.exports = function(sequelize, DataTypes){
	var Cart = sequelize.define("Cart", {
		purchaseURL: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "https://www.amazon.com/asdf;laksdjgfa",
			validate: {
				len:[23]
			}
		},
		customerName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zipCode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return Cart;
}