const express = require('express')
var path = require('path');
const app = express();
const svRoute = require("./routes/svRoutes")
app.use((req,res,next)=>{
    res.locals.path = req.path
    next();
})

// middleware & static files
// app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
app.use(express.json());
// app.get('/', (req, res) => {
    
// });
app.use('/',svRoute)

app.listen(5000,()=>{
    console.log("Listen port 5000")
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });