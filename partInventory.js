module.exports = (sequelize, DataTypes) => {
    const PartInventory = sequelize.define('PartInventory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      partName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  
    return PartInventory;
  };