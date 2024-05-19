import express from "express";
var app = express();
var PORT = 3000;

app.listen(3000, () => {
  console.log("listning to port 3000");
});

// app.listen(PORT, function(err){
//     if (err) console.log("Error in server setup")
//     console.log("Server listening on Port", PORT);
// })

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.post("/registor", (req, res) => {
    res.sendStatus(201);
    // res.send("<h1>Reg</h1>");
});
app.put("/usr/adarsh", (req, res) => {
    res.sendStatus(200);
});
app.patch("/usr/adarsh", (req, res) => {
    res.sendStatus(200);
});
app.delete("/usr/adarsh", (req, res) => {
    res.sendStatus(200);
});