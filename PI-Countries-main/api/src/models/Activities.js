const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'activities',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: true
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
        allowNull: true
      }
    },
    { timestamps: false }
  )
}
