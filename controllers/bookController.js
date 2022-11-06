const Author = require('../models/Author');
const Book = require('../models/Book');

const STATUS_CONSTANTS = require('./../constants/status.constants');

//create new book
exports.create = async(req,res)=> {
    try{
        const author = await Author.findById(req.body.authorID);
        let book = await Book.create(req.body);

        res.status(201).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data: book
        });

    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//get all books
exports.getAll = async (req,res) => {
    try{
        const books = await Book.find().populate(populates);

        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            count:books.length,
            data:books
        });
    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//get Book by ID
exports.getSingle = async (req,res) => {
    try{
        const book = await Book.findById(req.params.id).populate(populates);
        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data:book
        });
    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//update book
exports.update = async(req,res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new:true
        }).populate(populates);
        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data: book
        });
    } catch (error) {
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}


const populates = [
    { path: 'author', model: 'Author' }
]