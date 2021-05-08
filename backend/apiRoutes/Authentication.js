const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

var token;

const createUser = async(req, res, database, User) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    try {
        utilResult = await database.collection("User").findOne({email: req.body.email});
        if (utilResult===null) {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            }); 
    
            try {
                result = await database.collection("User").insertOne(user);
                token = jwt.sign({ id: user.email }, config.secret, {
                    expiresIn: 86400
                });
            } catch(err) {
                console.log(err);
            }
            console.log((await result).insertedId);
            return res.status(201).json({message: "Registration Successful", token: token});
        } else {
            return res.status(400).json({message: "Unable to create User"});
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({message: "Unable to create User"});
    }
}

const loginUser = async(req, res, database, User) => {
    try {
        result = await database.collection("User").findOne({email: req.body.email});
        const login = bcrypt.compareSync(req.body.password, result.password);
        if (login) {
            token = jwt.sign({ id: result.email }, config.secret, {
                expiresIn: 86400
            });
            return res.status(200).json({message: "Log in successful", token: token});
        } else {
            return res.status(200).json({ message: "Invalid credentials" });
        }
        
    } catch (err) {
        console.log(err);
        return res.status(400).json({message: "Wrong credentials"});
    }
}

module.exports = {
    createUser: createUser,
    loginUser: loginUser
};