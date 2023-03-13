const  express = require('express')
const router = express.Router()
const transporter = require('../config/transporter.js')

router.get('/', (req, res) => {
    return res.render('index', {title:'Adrian'})
})
router.get('/about', (req, res) => {
    return res.render('about', { title: 'About me' })
})
router.get('/contact', (req, res) => {
    return res.render('contact',{ title: 'Contact' })
})
router.post('/form-request', async (req, res) => {
    const {email, message} = req.body
    console.log(email, message)
    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject: 'Contact from your site',
        html: `
            <p>${message}</p>
            </br>
            <b>Message sent by ${email}</b>
        `
    })
    return res.render('index', {title: 'Adrian'})
})

module.exports = router