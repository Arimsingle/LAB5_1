var express = require('express')
var app = express()
app.set('views', './views')
app.set('view engine', 'ejs')
app.use( express.static("views"));
app.get('/', function(req, res){
   res.render('computer', {computers:[{Name:'Windows',Image:'images/111.png'},{Name:'Osx',Image:'images/222.png'},{Name:'Android',Image:'images/333.jpg'},{Name:'IOS',Image:'images/444.jpg'}]})
})
app.listen(8000)