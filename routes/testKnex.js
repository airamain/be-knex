const express = require('express');
const router = express.Router();
const model = require('../models/ejemplos');

const all = (req, res) => {
    // const titanic = model.getAll();
    model.getAll()
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err));
}

const single = (req, res) => {
    model.single(req.params.id)
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err));
}

const getJoin = (req, res) => {
    model.getJoin(req.params.id)
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err));
}

router.get('/', all);
router.get('/single/:id', single);
router.get('/getJoin', getJoin);
module.exports = router;