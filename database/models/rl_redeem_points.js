/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rl_redeem_points', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		promo_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		points: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
	}, {
		tableName: 'rl_redeem_points',
		timestamps: false
	});
};
