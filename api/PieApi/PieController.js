const Pie = require("../../Model/Pie");
const _ = require("lodash");

exports.params = function (req, res, next, id) {
    Pie.findById(id)
        .then((pie) => {
            if (!pie) {
                next(new Error("no Pie found"));
            } else {
                req.pie = pie;
                next();
            }
        }, (err) => {
                next(err);
        })
}

exports.get = function (req, res, next) {
    Pie.find({})
        .then((pies) => {
            res.json(pies);
        }, (err) => {
                next(err);
        })
}

exports.getOne = function (req, res, next) {
    let pie = req.pie;
    res.json(pie);
}

exports.post = function (req, res, next) {
    let newpie = new Pie(req.body);
    
    newpie.save((err, pie) => {
        if (err) {
            next(err)
        } else {
            res.json(pie);
        }
    })
}

exports.put = function (req, res, next) {
    let pie = req.pie;
    let updatedpie = req.body;

    _.merge(pie, updatedpie);
    pie.save((err, result) => {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    })
}

exports.delete = function (req, res, next) {
    req.pie.remove((err, removed) => {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    })
}