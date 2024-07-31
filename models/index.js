// user can have many posts
// posts belong to user via user id

const User = require('./User');
const Posts = require('./Posts');

User.hasMany(Posts, {
  foreignKey: 'user_id'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Posts }
