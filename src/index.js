import express  from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRouter from './routes/index.js'

const app = express()
app.set('view engine', 'ejs')
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.use(indexRouter)
app.use(express.static(join(__dirname, 'public')))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost${PORT}`)
})