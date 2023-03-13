require('dotenv').config()
const express = require('express') 
const path = require('path')
const indexRouter = require('./routes/index.js') 

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(indexRouter)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log(`Server listening on http://localhost${app.get('port')}`)
})