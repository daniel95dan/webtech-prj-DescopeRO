module.exports = function(sequelize, DataTypes) {
    // define entity
    var Zona = sequelize.define('Zona', {
      denumire: {
        type: DataTypes.STRING,
        field: 'denumire'
      },
      judete: {
        type: DataTypes.STRING,
        field: 'judete'
      },
      istorie: {
        type: DataTypes.STRING,
        field: 'istorie'
      }
    }, {
      timestamps: false,
      tableName: 'Zona'
    });
    
    return Zona;
}