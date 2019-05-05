const joi = require('joi')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User')
const Helpers = require('../Helpers/helper')

module.exports = {
    async createUser(req, res) {
        // console.log(req.body)
        const schema = joi.object().keys({
            username: joi.string().min(5).max(10).required(),
            password: joi.string().min(5).required()
        })

        const { error, value } = joi.validate(req.body, schema)
        // console.log(value)
        if(error && error.details) {
            return res.status(500).json({message: error.details})
        }

        const username = await User.findOne({username: Helpers.firstUpper(req.body.username)});
        if(username) {
            return res.status(409).json({message: 'Username already exist'})
        }

        return bcrypt.hash(value.password, 10, (err, hash) => {
            if(err) {
                return res.status(400).json({message: 'Error hashing password'})
            }
        const body = {
            username: Helpers.firstUpper(value.username),
            password: hash
        }
        User.create(body).then((user) => {
            res.status(201).json({message: "succesfully added user", user})
        }).catch( err => res.status(500).json({message: "error occured"}))
        })
    }
}