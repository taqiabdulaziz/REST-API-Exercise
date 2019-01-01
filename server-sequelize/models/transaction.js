'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {
      validate: {
      isNull: function () {
        if (this.UserId == null || this.ItemId == null) {
          throw new Error(`Arguments must be filled.`)
        }
      }
    }
  });
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};