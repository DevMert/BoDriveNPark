const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

//Url der DB
const CONNECTION_URL =
  "mongodb+srv://bodrive:bodrive@cluster0-6mmnn.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "BoDB";

var app = Express();
var database, collection;

//verändert ankommende Daten zur json sonst würde man nur raw data bekommen
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//erlaube dem Client daten aus der DB zu nehmen
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//In die DB users schreiben..
app.post("/users/:matrNr", (req, res) => {
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result.result);
    console.log("Erfolgreich in dxie DB geschrieben");
  });
});

//Update den User in der DB mit matrNr
app.put("/users/:matrNr", (req, res) => {
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result.result);
    console.log("Erfolgreich in dxie DB geschrieben");
  });
});

//Hol alle User aus der DB
app.get("/users", (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
    console.log("Daten erfolgreich aus der DB bekommen!");
  });
});

//Scope einen User aus der DB mit matrNr parameter
app.get("/users/:matrNr", (req, res) => {
  collection.findOne({ matrNr: req.params.matrNr }, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

//Starte den Server auf PORT 8080 und verbinde mit der Datenbank
app.listen(8080, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("users");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});
