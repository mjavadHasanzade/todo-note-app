
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
let urlEncodedParser = bodyParser.urlencoded({ extended: false })