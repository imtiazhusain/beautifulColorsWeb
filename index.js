const express = require('express')
const app = express()
const webRoutes = require('./routes/webRoutes')
const path = require('path')
const PORT = process.env.PORT || 5000



app.use(express.static(path.join(__dirname,'/public')))

app.use(webRoutes)
app.set('view engine','ejs')
app.set('views','./views')

app.listen(PORT,()=>{
    console.log(`Example Listening at http://localhost:${PORT}`);
})