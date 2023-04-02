const mongoose = require("mongoose");

const DB =
  "mongodb+srv://poojaagyat:Agyatp26@cluster2.hrj3n6i.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
