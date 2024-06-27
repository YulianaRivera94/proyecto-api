module.exports = (sequelize, DataTypes) => {
    const ServiceRequest = sequelize.define('ServiceRequest', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      vehicleInfo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    return ServiceRequest;
  };