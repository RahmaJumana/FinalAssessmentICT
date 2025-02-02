const express = require("express")
require("./connection")
const cors = require("cors")
const BlogModel = require("./model")

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());


app.post("/add", async(req,res)=>{
  try {
    await BlogModel(req.body).save()
    res.send({message: "Blog added successfully"})
  } catch (error) {
    console.log(error)
    
  }
})


app.put("/update/:id", async(req,res)=>{
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: "Blog updated successfully"})
  } catch (error) {
    console.log(error)
    
  }
})

app.delete("/remove/:id", async(req,res)=>{
  try {
    await BlogModel.findByIdAndDelete(req.params.id)
    res.send({message: "Blog deleted successfully"})
  } catch (error) {
    console.log(error)
    
  }
})


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
