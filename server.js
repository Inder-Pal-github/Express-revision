const express = require("express");
const userRouter = require("./routes/users");

const app = express();
app.set("view engine", "ejs");
app.use(logger);
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))


app.get("/", (req, res) => {
  console.log("Hello world!");
  // res.download('server.js')
  // res.status(200).json({msg:"Error"});
  res.render("index", { text: "world!" });
});

app.use("/users", userRouter);

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
app.listen(3000);
