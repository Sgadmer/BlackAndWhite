let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('views', '#src/serverTEST/views');

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')

});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/about', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    console.log(req.body);
    res.render('about-success', {data: req.body});
});

app.get('/news/:id', (req, res) => {
    let obj = {
        title: 'Новость',
        id: 4,
        paragraphs: ['Paragraf', 'Obichny Tekst', 'Chisla 2 3 4 5', 99]
    }
    res.render('news', { newsId: req.params.id, newParam: 234, obj: obj })
    console.log(req.params.id);

});



app.listen(8080);