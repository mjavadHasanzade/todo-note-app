
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
});


// Create Schema
let todoSchema = new mongoose.Schema({
    item: String
})

// Create model
var Todo = mongoose.model('Todo', todoSchema);


// var itemOne = Todo({ item: 'buy something' }).save((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('item saved');
// })

// var data = [{ item: 'get milk' }, { item: 'get strwberry' }, { item: 'go to library' }, { item: 'bring car' }];
let urlEncodedParser = bodyParser.urlencoded({ extended: false });


module.exports = (app) => {
    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err
            res.render('todo', { todos: data })
        })
    })
    app.post('/todo', urlEncodedParser, (req, res) => {
        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err
            res.json(data);
        })
    })
    app.delete('/todo/:item', (req, res) => {
        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove((err, data) => {
            if (err) throw err
            res.json(data);
        });
    })
    app.put('/todo/:item', urlEncodedParser, async (req, res) => {

        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove((err, data) => {
            if (err) throw err
        });
        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err
            res.json(data);
        })

    })
}