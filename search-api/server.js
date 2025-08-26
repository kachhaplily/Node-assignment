import express from "express";
import userData from "./user.json" with { type: "json" };
const app = express();

//create user api

app.get("/", (req, res) => {
  res.send(userData);
});


/**
 * Get user by ID
 */
app.get("/user/:id", (req, res) => {
  let reqId=Number(req.params.id);
  let user=userData.filter(u=>u.id==reqId);
  if(user.length > 0){
    res.send(user);
  }else{
    res.status(404).send("User not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
