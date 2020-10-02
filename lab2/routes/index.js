'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //variables are created
    var method = req.query.method, x = req.query.x, y = req.query.y;

    console.log('\n-----------New Calculation-----------\n');

    //Console check
    console.log('\nQuery being used: ', req.query);
    console.log('Method being used: ', req.query.method);
    console.log('First number: ', req.query.x);
    console.log('Second number: ', req.query.y, '\n');

    //Function that preforms the calculations passing the 3 required parameters
    function calculate(method, x, y) {
        //Switch statement that determines which operation the user used
        switch (method) {
            //case catches the method String
            case 'add':
                //Equation gets laid out and calculated
                console.log(x, ' + ', y, ' = ', parseFloat(x) + parseFloat(y), '\n');
                break;
            case 'subtract':
                console.log(x, ' + ', y, ' = ', parseFloat(x) - parseFloat(y), '\n');
                break;
            case 'multiply':
                console.log(x, ' + ', y, ' = ', parseFloat(x) * parseFloat(y), '\n');
                break;
            case 'divide':
                console.log(x, ' + ', y, ' = ', parseFloat(x) / parseFloat(y), '\n');
                break;
            default:
                //default outcome if no case is caught
                console.log('Your input seems to be invalid, please choose add, subtract, multiply or divide. Make sure its lowercase');
                console.log('Input example: ?method=multiply&x=16&y=4\n');
                break;
        }
    }

    //Function call with the 3 parameters
    calculate(method, x, y)

    console.log('-----------Calculation Ended-----------\n');

    res.render('index', { title: 'Express' });
});

module.exports = router;
