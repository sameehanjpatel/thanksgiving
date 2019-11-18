const router = require("express").Router();
const { Dish, Person } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#router

router.get("/", (req, res, next) => {
    
});

router.post("/dishes", (req, res, next) => {

});

router.delete("/", (req, res, next) => {

});

router.post("/", (req, res, next) => {

});


module.exports = router;
