/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rl_voucher_codes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		promo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		voucher_code: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		is_use: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		release_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'rl_voucher_codes',
		timestamps: false
	});
};
