const mongoose = require("mongoose"); //import Mongoose

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}
//set up Schema and model
const ServicesSchema = new mongoose.Schema({
    num: Number,
    title: String,
    description: String,
  });
  const Services = mongoose.model("Services", ServicesSchema);
  
async function getServices() {
  await connect();
  return await Services.find({}).sort({}); //return array for find all
}
module.exports = {
  getServices,
};
