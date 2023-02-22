import { Router } from "express"
const router = Router()

router.get('/', (req, res) => {
    return res.render('index', {title:'Adrian'})
})
router.get('/about', (req, res) => {
    return res.render('about', { title: 'About me' })
})
router.get('/contact', (req, res) => {
    return res.render('contact',{ title: 'Contact' })
})

export default router