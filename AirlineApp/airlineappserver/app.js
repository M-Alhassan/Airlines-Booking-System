const { json } = require("express");
var express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/searchflights", function (req, res) {
  dt = req.body;
  console.debug(dt);
  res.send(
    JSON.stringify({
      ok: true,
    })
  );

  // res.send("You just called the post method at '/hello'!\n");
});

app.post("/signup", (req, res) => {
  console.debug(req.body);
  res.send(
    JSON.stringify({
      ok: true,
    })
  );
});

app.post('/login',(req,res)=>{
  console.debug(req.body);
  res.send(
    JSON.stringify({
      ok: true,
    })
  );
})

app.listen(8000);
