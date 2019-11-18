const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

router.get("/", (req, res, next) => {
    Person.findAll()
        .then(people => {
        res.status(200).send(people)})
        .catch((e)=> next(e))
});

router.get("/:id", (req, res, next) => {
    Person.findAll({where:{categoryId:this.categoryId}})
    .then(people => people.filter(person => person.id !== this.id))
    .catch((e) => next(e))
})

router.post("/", (req, res, next) => {
    Person.create(req.body)
        .then(() => Person.findAll({ where: { name: req.body.name } }))
        .then(people => res.status(200).send(people))
        .catch(e => res.status(400).send(e));
});

router.delete("/:id", (req, res, next) => {
    let id = parseInt(req.params.id);
    Person.findOne({ where: { id: id } }).then(response => {
        if (response === null) {
            res.send("no id");
        } else {
            Person.destroy({ where: { id: id } })
                .then(() => Person.findAll())
                .then(people => res.status(200).send(people))
                .catch(e => res.status(400).send(e));
        }
})

router.put("/:id", (req, res, next) => {
    Person.create(req.body)
        .then(people => {
            res.status(200).send(people)
        })
        .catch((e) => next(e))
})

module.exports = router;
