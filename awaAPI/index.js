const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const orders = require('./orders.json')
const users = require('./users.json')
const restaurants = require('./restaurants.json')


//body elements get transferred as json 
app.use(bodyParser.json());
//enables data transferring via http elements so that security doesnt get in the way
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/restaurants', (req, res) => {
  res.send('all restaurants')
}) 
//all restaurant data 

app.get('/restaurants/:id', (req, res)=>{
  res.send('restaurant with one id attribute')
}) 
// restaurant data 

app.put('/restaurants/:id', (req, res)=>{
  res.send('restaurant modified')
})
//admin restaurant data add restaurant

app.post('/restaurant', (req, res)=>{
  res.send('restaurant added')
})
//admin restaurant data 

app.delete('/restaurant/:id', (req, res)=>{
  res.send('restaurant deleted')
}) 
//admin delete restaurant data

app.get('/order', (req, res)=>{
  res.send('get all orders')
}) 
//all order data 

app.get('/order/:id', (req, res)=>{
  res.send('get one order')
}) 
//one order data 

app.post('/order', (req, res)=>{
  res.send('add a order')
})
//add order data 

app.delete('/order/:id', (req, res)=>{
  res.send('delete an order')
}) 
//delete order data

app.get('/user', (req, res)=>{
  res.send('get all users data')
})
//all user data

app.get('/user/:id', (req, res)=>{
  res.send('get one users data')
})
//one users data

app.post('/user', (req, res)=>{
  res.send('one user added')
}) 
//add user data 

app.put('/user/:id', (req, res)=>{
  res.send('one user modified')
}) 
//modify user data

app.delete('/user/:id', (req, res)=>{
  res.send('user deleted by id')
}) 
//delete user data
