const mongoose = require("mongoose");

async function co() {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://seliasbe:sosotest123@cluster0.rtde0.mongodb.net/known?retryWrites=true&w=majority",
    );
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}

co();
