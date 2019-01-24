/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rl_ms_promo', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		promo_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		promo_type: {
			type: DataTypes.ENUM('promo','voucher','cashback','loyalty_voucher'),
			allowNull: false
		},
		voucher_type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		vendor_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		promo_serial_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		blast_email_promo_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		voucher_end_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		days: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		number_of_ticket_promo: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		stock: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		blast_email: {
			type: DataTypes.ENUM('Done','Not Yet'),
			allowNull: false,
			defaultValue: 'Not Yet'
		},
		filename_receiver: {
			type: DataTypes.STRING(255),
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
		},
		status_tiket: {
			type: DataTypes.ENUM('approved','requested','rejected','deleted'),
			allowNull: true,
			defaultValue: 'requested'
		},
		division_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		division_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		period_start: {
			type: DataTypes.TIME,
			allowNull: true
		},
		period_end: {
			type: DataTypes.TIME,
			allowNull: true
		}
	}, {
		tableName: 'rl_ms_promo',
		timestamps: false
	});
};
