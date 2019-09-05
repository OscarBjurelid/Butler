const Express    = require('express')
const Routes     = require('./routes').default
const Path       = require('path')

const app = Express()
const port = process.env.PORT || 3000

app.set('views', './views')
//app.set('view engine', 'pug')
app.use(Express.static(Path.join(__dirname, 'public')))

app.use('/', Routes)

app.listen(port, () => {
    console.log(`Application listening on ${port}`)
})

