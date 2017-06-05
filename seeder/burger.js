var db = require("../config/connection");

db.Burger.bulkCreate([
    {
        burger_name: 'Diablo Burger',
        devoured: false
    }, {
        burger_name: 'Toro Burger',
        devoured: false
    }, {
        burger_name: 'Double Hamburger',
        devoured: false
    }, {
        burger_name: 'Black Buffalo Burger',
        devoured: true
    }, {
        burger_name: 'Old-Fashioned Hamburger',
        devoured: true
    }, {
        burger_name: 'Kobe Beef Burger',
        devoured: false
    }
])
.catch(function(error) {
    console.log(error);
});