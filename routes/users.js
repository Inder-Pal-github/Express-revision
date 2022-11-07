const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("User List");
});

userRouter.post("/", (req, res) => {
  res.send("User form");
});
userRouter.get("/new", (req, res) => {
  res.send("User form");
});

userRouter
  .route("/:id")
  .get((req, res) => {
    res.send("Get user with id: "+ req.params.id);
  })

  .put((req, res) => {
    res.send("Get user with id: "+ req.params.id);
  })

  .delete((req, res) => {
    res.send("Get user with id: "+ req.params.id);
  });

userRouter.param("id",(req,res,next,id)=>{
    console.log(id);
    next();
})

module.exports = userRouter;
