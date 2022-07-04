const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const multer = require('multer')

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

// mongodb+srv://21pintoo-singh:S0Uw8LhNlYRyHfiq@cluster1.k5nsu.mongodb.net/college-intern-project2
// mongodb+srv://nitinsayshe:eocJtbZ0u5pZhiKt@cluster0.tyswy.mongodb.net/group47DataBase
mongoose.connect("mongodb+srv://21pintoo-singh:S0Uw8LhNlYRyHfiq@cluster1.k5nsu.mongodb.net/college-intern-project2", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);
app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});