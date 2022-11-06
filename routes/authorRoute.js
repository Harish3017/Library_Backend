const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');

router.route('/')
    .post(
        authorController.create
    )
    .get(
        authorController.getAll
    )
router.route('/:id')
    .get(
        authorController.getSingle
    )
    .patch(
        authorController.update
    );
module.exports = router;
