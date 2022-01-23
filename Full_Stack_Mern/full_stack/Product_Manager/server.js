const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
app.use(express.json()); 
app.use(cors())
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config'); 
require('./server/routes/product.routes')(app);

app.get('/', function(req, res){
    res.redirect('/products');
});

app.get('/products', function(req, res){
    res.send("Redirected to User Page");
});


app.listen(port, () => console.log(`Listening on port: ${port}`) );