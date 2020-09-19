var express = require('express');
var cors = require('cors');
const app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var port = process.env.PORT || 4000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors())
app.use(urlencodedParser);
app.use(jsonParser);
app.use(express.static('UI'));

app.get('/story', (res,res) => {
    let lstStory = [];

    var story = {

    }

    lstStory.push(story);

    res.json(lstStory);
})

app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}")
})