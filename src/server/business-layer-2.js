var express =  require ("express");

var mongoClient = require("mongodb").MongoClient;

var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json())

var conStr = "mongodb://127.0.0.1:27017";

app.get("/customers", (req, res)=>{
    mongoClient.connect(conStr)
    .then(obj =>{
       var database =  obj.db("tutorial");
       database.collection("customers").find({}).toArray().then(documents => {
        res.send(documents);
        res.end();
       })
    })
    .catch(err=>{
        console.log(err);
    })

});

app.post("/registercustomer", (request, response)=>{
    var customerDetails = {
        UserId: request.body.UserId,
        UserName: request.body.UserName,
        Password: request.body.Password,
        Age: parseInt(request.body.Age),
        Email: request.body.Email,
        Mobile: request.body.Mobile
    };

    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("tutorial");
        database.collection("customers").insertOne(customerDetails)
        .then(()=>{
            console.log("Record Inserted Successfully...................");
            response.redirect("/customers");
        })
    })

});

app.listen("5005");
console.log(`Server started at http://127.0.0.1:5005`);


