// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag,
  as: 'product_tags',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Tag, {
  foreignKey: 'tag_id',
  through: ProductTag,
  as: 'product_tags',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
