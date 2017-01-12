module.exports = function(sequelize, DataTypes) {
    // define entity
    var zona = sequelize.define('Zona', {
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
      freezeTableName: true
    });
    
    return zona;
};