/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rl_user_key', {
		id: {
			type: DataTypes.INTEGER(100),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		private_key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		public_key: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'rl_user_key'
	});
};
