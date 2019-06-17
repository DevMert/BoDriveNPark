const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

//Url der DB
const CONNECTION_URL =
  "mongodb+srv://bodrive:bodrive@cluster0-6mmnn.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "BoDB";

var app = Express();
var database, collection, parkplatz;

//verändert ankommende Daten zur json sonst würde man nur raw data bekommen
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

//Erlaube dem Client Daten aus der DB zu nehmen..
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

//In die Collection parkplatz schreiben..
app.post("/parkplatz", (req, res) => {
  parkplatz.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    console.log(req.body);
    res.send(result.result);
    console.log("Erfolgreich in die DB geschrieben");
  });
});

//In die DB users schreiben..
app.post("/users", (req, res) => {
  collection.insertOne(req.body, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    console.log(req.body);
    res.send(result.result);
    console.log("Erfolgreich in die DB geschrieben");
  });
});

//Update User/matrikelNummer..
app.put("/users/:matrNr", (req, res) => {
  collection.update(
    {
      matrNr: req.params.matrNr // suche den User mit der matrNr
    },
    {
      $set: {
        montag: req.body.montag,
        dienstag: req.body.dienstag,
        mittwoch: req.body.mittwoch,
        donnerstag: req.body.donnerstag,
        freitag: req.body.freitag
      }
    },
    { multi: true },
    function(err, res) {
      if (err) res.send(err);
      else {
        console.log("user updated!", res);
      }
    }
  );
});

//Hol alle User aus der DB..
app.get("/users", (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
    console.log("Daten erfolgreich aus der DB bekommen!");
  });
});

//Scope einen User aus der DB mit matrNr parameter..
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
      parkplatz = database.collection("parkplatz");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});
