// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
      isNumeric: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
Product.associate = function(models) {
  Product.belongToMany(models.Category, {
    through: "Category_Items",
    foreignkey: "Category_ID"
  })
}
module.exports = Product;
