const mongoose = require('mongoose')
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author:'Samarth vohra',
        text:'Insan ka jeevan sangharsh se bhara hai'
    },
    {
        author:'Mohit',
        text:'Ant me santushti bahut zaruri hai'
    },
    {
        author:'Dhruval',
        text:'Jeevan mein paisa zruri hai'
    }
]

async function Seed(){
    await Quotes.insertMany(dummyQuotes)
    console.log('db seeded')
}
module.exports = Seed;