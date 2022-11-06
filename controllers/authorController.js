const Author = require('../models/Author');

const STATUS_CONSTANTS = require('./../constants/status.constants');

//Create Author
exports.create = async(req,res) => {
    try{
        console.log('get data');
        const authorObj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        console.log(authorObj);
        const author = await Author.create(authorObj);
        res.status(201).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data: author
        });

    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//get all author
exports.getAll = async (req,res) => {
    try{
        const authors = await Author.find();

        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            count:authors.length,
            data:authors
        });
    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//get author by ID
exports.getSingle = async (req,res) => {
    try{
        const author = await Author.findById(req.params.id);
        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data:author
        });
    }catch (error){
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

//update author
exports.update = async(req,res) => {
    try{
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new:true
        });
        res.status(200).json({
            message: STATUS_CONSTANTS.SUCCESS,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            message: STATUS_CONSTANTS.FAIL,
            error: error.message
        });
    }
}

