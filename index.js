const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')
const { text } = require('express')

const app = express()

const PORT = 3002
let user = undefined

app.use('/css', express.static(__dirname + '/css'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/html', express.static(__dirname + '/html'))

app.use(bodyParser.urlencoded({ extended: false }))
app.post('/index', (req, res) => {
    if (!req.body.email || !req.body.pass) return res.sendStatus(400)
    const message = {

        to: req.body.email,
        subject: 'congratulation',
        html: `
        <h2>Вітаю ваші данні були успішно передані</h2>
        <i>ваші данні:</i>
        <ul>
        <li>login:${req.body.email}</li>
        <li>password:${req.body.pass}</li>
        <li>password:${req.body.promo}</li>
        </ul>       
        
        `
    }
    mailer(message)
    user = req.body
    res.redirect('/index')

})
app.get('/index', (req, res) => {
    if (typeof user !== 'object') return res.sendFile(__dirname + '/index.html')
    res.send(`Sucsess:${user.email} `)
    user = undefined
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/index`))