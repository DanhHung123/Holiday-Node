const { Console } = require('console');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

app.use(express.static(__dirname + '/public'));

app.engine('hbs', engine({ defaultLayout: 'main' , extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

const holidays = [
    {
        tilte: 'New Year',
        path: 'closeup-delicious-new-year-food-served-table-red-background.jpg',
        icon: 'fa-solid fa-champagne-glasses',
        link: '/holiday/0'
    },
    {
        tilte: 'Mid-Autumn',
        path: 'fresh-moon-cake.jpg',
        icon: 'fa-solid fa-moon',
        link: '/holiday/1'
    },
    {
        tilte: 'Christmas',
        path: 'merry-christmas-2022-greetings-with-tree.jpg',
        icon: 'fa-solid fa-candy-cane',
        link: '/holiday/2'
    }
]

app.get('/', (req, res) => {
    res.render('home',{holidays});
})

app.get('/holiday/:index',(req,res) => {
    res.render('holiday',{ holiday: holidays[req.params.index] });
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})