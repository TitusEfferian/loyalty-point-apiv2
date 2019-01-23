/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rl_tmp_points', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		order_id: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		tmp_points: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		status_deleted: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'rl_tmp_points',
		timestamps: false
	});
};
