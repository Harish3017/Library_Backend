const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.route('/')
    .post(
        bookController.create
    )
    .get(
        bookController.getAll
    )
router.route('/:id')
    .get(
        bookController.getSingle
    )
    .patch(
        bookController.update
    );
module.exports = router;
