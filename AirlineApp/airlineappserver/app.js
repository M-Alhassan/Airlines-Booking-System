const {Pool} = require("pg");
const pool = new Pool({
  user: "postgres",
  host: 'localhost',
  database: "test",
  password: "1",
  port: 5432,
});

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
  pool.query('INSERT INTO Passenger (FirstName, LastName, DOB, PhoneNumber, Email, PassengerID, Password) Values ($1, $2, $3, $4, $5, $6, $7)', [req.body.fn, req.body.ln, req.body.dob, req.body.phn, req.body.email, req.body.id, req.body.pswrd], 
  (error, results) => {
    if(error){
      throw error;
    }
    res.send(
      JSON.stringify({
        ok: true,
        status: 'user registered'
      })
    );
  });
  // res.send(
  //   JSON.stringify({
  //     ok: true,
  //   })
  // );
});

app.post('/login',(req,res)=>{
  console.debug(req.body);
  pool.query('SELECT Email, Password, PassengerID FROM Passenger WHERE Email = $1  AND Password = $2', [req.body.email, req.body.password],
  (error, results) => {
    if (error) {
      throw error;
    }
    res.send(
      JSON.stringify({
        ok: true,
        status: results.rowCount,
        tokenID: results.rows
      })
    );
  });
})

app.get('/gettickets',(req,res)=>{
  console.debug(req.headers)
  const passengerid = req.headers.tokenid
  console.debug(passengerid)
  const sqlquery = `SELECT * FROM (SELECT * FROM ticket JOIN flight ON ticket.flightnum = flight.flightnum AND passengerid = '${passengerid}') AS dt`
  pool.query(sqlquery, (error, results) => {
    if (error) {
      throw error;
    }
    res.send({
      ok: 2,
      status: results.rowCount,
      data: results.rows
    })
  })

//   res.send(
//     ([
//       {
//         "ticket" : "A47C2",
//         "flight" : "AA12C",
//         "from" : "Riyadh",
//         "to" : "Chichago",
//         "datetime" : "12-02-2022 14:52pm",
//         "seat" : "147A"
//       },
//       {
//         "ticket" : "A47C2",
//         "flight" : "AA12C",
//         "from" : "Islamabad",
//         "to" : "London",
//         "datetime" : "12-02-2022 14:52pm",
//         "seat" : "147A"
//       },
//       {
//         "ticket" : "A47C2",
//         "flight" : "AA12C",
//         "from" : "NYC",
//         "to" : "Chichago",
//         "datetime" : "12-02-2022 14:52pm",
//         "seat" : "147A"
//       }
//     ])
//   )
//   console.log('response sent')
// })
// app.get('/getflights',(req,res)=>{
//   res.send(
//     ([
//       {
//         "flight" : "AA12C",
//         "from" : "Riyadh",
//         "to" : "Chichago",
//         "datetime" : "12-02-2022 14:52pm",
//         "aircraftType" : "147A"
//       },
//       {
//         "flight" : "AA12C",
//         "from" : "Riyadh",
//         "to" : "Chichago",
//         "datetime" : "12-02-2022 14:52pm",
//         "aircraftType" : "147A"
//       },
//       {
//         "flight" : "AA12C",
//         "from" : "Riyadh",
//         "to" : "Chichago",
//         "datetime" : "12-02-2022 14:52pm",
//         "aircraftType" : "147A"
//       },
      
//     ])
//   )

  console.log('response sent')
})

app.get('/getseats',(req,res)=>{
  res.send(
    ([
      {
        "flight" : "C142C",
        "seats" : ["1A","2B","6C", "4D","3R","3D","1E","2R","2D","6F"]
      
        }, 
    ])
  )
  console.log('response sent')
})
app.listen(8000);
