const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.static("public"));
app.set("view engine","ejs");

const fs = require('fs');
app.get('/',function (req, res) {
    let products = fs.readFileSync("data/dataproducts.json","UTF-8");
    products = JSON.parse(products);
    res.render("products",{
        products:products
    });
});

app.listen(PORT,function () {
    console.log("server is running.....");
});