module.exports = function(sequelize, DataTypes) {
    // define entity
    var zonaviz = sequelize.define('Zoneviz', {
      Nume: {
        type: DataTypes.STRING,
        field: 'Nume'
      },
      Perioada: {
        type: DataTypes.STRING,
        field: 'Perioada'
      }
    }, {
      timestamps: false,
      freezeTableName: true
    });
    
    return zonaviz;
};