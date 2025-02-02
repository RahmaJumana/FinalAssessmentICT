const mongoose = require("mongoose");
mongoose
  .connect(
   " "
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
