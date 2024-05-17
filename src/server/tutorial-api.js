

var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var cors = require('cors');
const { MongoClient } = require('mongodb');
const { redirect } = require('react-router-dom');

var url = "mongodb://127.0.0.1:27017";


var app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`Welcome to the server.....`);
})

app.get("/videos",(req, res)=>{
    mongoClient.connect(url).then((clientObject)=>{
        var database = clientObject.db("tutorial");

        database.collection("videolibrary").find({}).toArray().then((documents)=>{
            res.send(documents);
        })
    })
});

app.get("/videos/:id",(req, res)=>{
    var video_id = parseInt(req.params.id);

    MongoClient.connect(url).then((clientObject)=>{
        var database = clientObject.db("tutorial");
        database.collection("videolibrary").find({id: video_id}).toArray().then(documents=>{
            res.send(documents);
        })

    })
});


app.post("/addvideo", (req, res)=>{
    var video = {
        "id": parseInt(req.body.id) ,
        "title": req.body.title,
        "url": req.body.url,
        "views": parseInt(req.body.views),
        "likes": parseInt(req.body.likes),
        "subscribed": req.body.subscribed
    }

    mongoClient.connect(url).then(clientObject=>{
        var database = clientObject.db("tutorial");
        database.collection("videolibrary").insertOne(video).then((result)=>{
            console.log("video inserted");
            res.redirect("/videos");
        })
    })
});

app.put("/updatevideo/:id", (req, res)=>{
    var video_id = parseInt((req.params.id));
        var video = {
        "title": req.body.title,
        "url": req.body.url,
        "views": parseInt(req.body.views),
        "likes": parseInt(req.body.likes),
        "subscribed": (req.body.subscribed==true)?true:false
    }
    mongoClient.connect(url).then(clientObject=>{
        var databse = clientObject.db("tutorial");
        databse.collection("videolibrary").updateOne({id:video_id}, {$set: video}).then((result)=>{
            console.log(`Video updated successfully........`);
            res.redirect("/videos");
        })

    })
});

app.delete("/deletevideo/:id", (req, res)=>{
    var video_id = parseInt(req.params.id);

    mongoClient.connect(url).then(clientObject=>{
        var database = clientObject.db("tutorial");
        database.collection("videolibrary").deleteOne({id:video_id}).then((result)=>{
            console.log("Video deleted Sucessfully......");
            res.redirect("/videos");
        })
    })
});

app.listen(5566);

console.log(`Server started at http://127.0.0.1:5566`);