const footmatchs = [{
    id: 1,
    Div: "E0",
    date_time: "2020-01-09 20:00:00",
    home_team: 'Liverpoll',
    away_team: 'Norwich',
    fthg:'4',
    ftag:'1'
},
{
    id: 2,
    Div: "E0",
    date_time: "2019-08-10 20:00:00",
    home_team: 'West Ham',
    away_team: 'Man city',
    fthg:'0',
    ftag:'5'
},
];
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3308',
    password: '',
    database: 'testdatabase'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/footmatchs', (request, response) => {
        response.send(footmatchs);
    });
    app.get('/index',(request,response)=>{
        response.sendFile('./index.html',{ root: __dirname });
    });
}

//export router
module.exports = router;