const mongoose = require('mongoose')
const Product = require('./models/Product') //importing model

//bht sari chize ek sath db me dalenege (seed karenge)

const products=[
    {name:'tshirt',img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww',price:400,desc:'nice thsirt'},
    {name:'shirt',img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8fDA%3D',price:500,desc:'nice shirt'},
    {name:'jeans',img:'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D',price:25000,desc:'its a jeans'},

]

async function seedDB(){
   await Product.insertMany(products) //insertMany returns a promise
   console.log('db seeded')
}

module.exports = seedDB;