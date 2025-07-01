
const express = require('express');
// route ke liye router lagega so import karo
const router = express.Router();

// now route ko controller se mapp krna hai to controller ko pehle import krna padega

const {createtodo} = require('../controllers/createtodo');

const {getTodo,getTodobyID} = require('../controllers/getTodo'); // ya diff controller likh lo ya same controller ke ander hi likh sakte ho

const {updateTodo} = require('../controllers/updateTodo')

const { deleteTodo} = require("../controllers/deleteTodo");

// define api routes  

router.post('/createtodo' , createtodo);
router.get('/getTodo' , getTodo);
router.get('/getTodo/:id',getTodobyID);
router.put('/updateTodo/:id' , updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router ;