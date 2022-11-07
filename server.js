const express = require("express");
const userRouter = require("./routes/users");

const app = express();
app.set("view engine", "ejs");
app.use("/users", userRouter);

app.get("/", (req, res) => {
  console.log("Hello world!");
  // res.download('server.js')
  // res.status(200).json({msg:"Error"});
  res.render("index", { text: "world!" });
});

app.listen(3000);
