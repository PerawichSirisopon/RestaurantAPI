const {
    DataTypes
} = require("sequelize");
const sequelize = require("./db");
//Define the restaurant model
const Restaurant = sequelize.define("restaurant", {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    }
});

module.exports = Restaurant;