const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://root:1234@cluster0.1ix7dxb.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = mongoConnect;

