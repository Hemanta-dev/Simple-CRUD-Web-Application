const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
var db;
var dbURL = "mongodb://localhost:27017/";
mongoClient.connect(dbURL, (err, dbClient) => {
  if (err) throw err;
  db = dbClient.db("userdb");
  console.log("database COnnected");
});
router.post("/users/create/", (req, res) => {
  const rb = req.body;
  db.collection("users").insert(
    {
      fullname: rb.fullname,
      username: rb.username,
      email: rb.email,
      salary: rb.salary,

      role: rb.role,
    },
    (err, result) => {
      if (err) throw err;
      console.log("user created");
    }
  );
});

router.get("/users", (req, res) => {
  db.collection("users")
    .find({})
    .toArray((err, userlist) => {
      if (err) throw err;
      res.send(userlist);
    });
});

router.delete("/users/delete", (req, res) => {
  db.collection("users").deleteOne(
    { _id: ObjectId(req.body._id) },
    (err, result) => {
      if (err) throw err;
      console.log("user deleted succesfully");
    }
  );
});

router.put("/users/update", (req, res) => {
  console.log(req.body.id);
  db.collection("users").updateOne(
    { _id: ObjectId(req.body._id) },
    {
      $set: {
        fullname: req.body.fullname,
        username: req.body.username,
        salary: req.body.salary,
        role: req.body.role,
        email: req.body.email,
      },
    },
    (err, result) => {
      if (err) throw err;
      console.log("user updated");
    }
  );
});

router.get("/users/update", (req, res) => {
  db.collection("users").findOne(
    { _id: ObjectId(req.body._id) },
    (err, result) => {
      if (err) throw err;
      console.log("user updated succesfully");
    }
  );
});

router.get("/updateEmp/:id", (req, res) => {
  console.log(req.params.id);
  db.collection("users").findOne(
    { _id: ObjectId(req.params.id) },
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.use("/api", router);
app.listen(3001);
console.log("server started");
