// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const Product_Tag = require('./Product_Tag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: 'CASCADE'
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: Product_Tag
  }
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: Product_Tag
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  Product_Tag,
};
