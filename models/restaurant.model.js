const sql = require("./db");
//Constructor
const Restaurant = function (restaurant) {
    //Attributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name, type, imageurl, VALUES ("KFC", "Fastfood", "null")
    sql.query("INSERT INTO restaurant SET ?", newRestaurant, (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("new restaurant created");
        result(null, {
            id: res.id,
            ...newRestaurant
        });
    });
};

//Get all restaurant
Restaurant.getAll = (result) => {
    //SELECT * FROM restaurants
    sql.query("SELECT * FROM restaurant", (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("get all restaurant");
        result(null, res);
    });
};

Restaurant.getById = (restaurantsId, result) => {
    //SELECT * From restaurant WHERE id = restaurantId
    sql.query(`SELECT * From restaurant WHERE id = $(restaurantId)`,
        (err, res) => {
            //มี error เกิดขึ้น
            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }
            //found 1 row
            console.log("get restaurant by Id");
            if (res.length) {
                result(null, res[0]);
                return;
            }
            //not found
            result({
                kind: "not_found"
            }, null);
        }
    );
};

module.exports = Restaurant;