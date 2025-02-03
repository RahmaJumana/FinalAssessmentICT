const mongoose = require("mongoose");
mongoose
  .connect(
   " mongodb+srv://rjp:rahma@cluster0.mfydx.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
