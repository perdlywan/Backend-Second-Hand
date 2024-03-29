'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Order.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
      Order.hasMany(models.Notification, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    order_price: DataTypes.INTEGER,
    order_status: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};