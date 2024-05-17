
var express =  require ("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();

app.get("/", (request, response)=>{
    response.send(`<h2>API Home</h2>`);
});

app.get("/connect", (request, response)=>{
    mongoClient.connect(`mongodb://127.0.0.1:27017`)
    .then(()=>{
        response.send(`Connected with mongo DB server successfully.....`);
    })
    .catch((err)=>{
        console.log(err);
    })

});


app.get("/products",(request, response)=>{
    response.send([{Name:"TV", Price: 45000},
     {Name:"Smartphone", Price: 29999}])
});

app.get("/details/:id/:Name", (request, response)=>{
    response.send(`
    Id: ${request.params.id} <br>
    Name: ${request.params.Name} <br>


    `)
});


app.get("/categories", (request, response)=>{
    response.send(
 `
 <Categories>
 <Category>
     <Id>1</Id>
     <Name>Oneplus Nord</Name>
 </Category>
</Categories>`

    )
});

app.post("/addProduct",(req, res)=>{
    res.send(`POST- Inserts data`)
});

app.put("/updateProduct",(req, res)=>{
    res.send(`PUT- modifies data`);
});

app.delete("/remove",(req, res)=>{
    res.send(`DELETE- removes data`)
});












app.get("*", (request, response)=>{
    response.send("Requested path not found");
});


app.listen(5005);

console.log(`server started at http://127.0.0.1:5005`);


