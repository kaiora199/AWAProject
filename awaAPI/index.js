const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const orders = require('./orders.json')
const users = require('./users.json')
const restaurants = require('./restaurants.json')
const food = require('./food.json')


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
  res.json(restaurants)
}) 
//all restaurant data 

app.get('/restaurants/:id', (req, res)=>{
  var result = restaurants.restaurants.find(d=>d.id===req.params.id)
  res.json(result)
}) 
// restaurant data 

app.put('/restaurants/:id', (req, res)=>{
  res.send('restaurant modified')
})
//admin restaurant data add restaurant

app.post('/restaurants', (req, res)=>{
  console.log("creating a new " + req.body.restaurantType);
  console.log(req.body);
  restaurants.restaurants.push({
      id: uuidv4(),
      name: req.body.name,
      address: req.body.address,
      operatingHours: req.body.operatingHours,
      image: req.body.image,
      restaurantType: req.body.restaurantType,
      priceLevel: req.body.priceLevel
  })
  res.send('restaurant created')
})
//admin restaurant data 

app.delete('/restaurants/:id', (req, res)=>{
  const result = restaurants.restaurants.findIndex(d => d.id ===req.params.id)
  if(result !== -1){
  restaurants.restaurants.splice(result,1)
  res.send('deleted '+ req.params.id)
  }else{
  res.send('no such restaurant')
  }
}) 
//admin delete restaurant data

app.get('/orders', (req, res)=>{
  res.send('get all orders')
}) 
//all order data 

app.get('/orders/:id', (req, res)=>{
  var result = orders.orders.food.find(d=>d.id===req.params.id)
  res.json(result)
}) 
//one order data 

app.post('/orders', (req, res)=>{
  res.send('add a order')
})
//add order data 

app.delete('/orders/:id', (req, res)=>{
  res.send('delete an order')
}) 
//delete order data

app.get('/users', (req, res)=>{
  res.send('get all users data')
})
//all user data

app.get('/users/:id', (req, res)=>{
  var result = users.users.find(d=>d.id===req.params.id)
  res.json(result)
})
//one users data

app.post('/users', (req, res)=>{
  res.send('one user added')
}) 
//add user data 

app.put('/users/:id', (req, res)=>{
  res.send('one user modified')
}) 
//modify user data

app.delete('/users/:id', (req, res)=>{
  res.send('user deleted by id')
}) 
//delete user data

app.get('/food/:id', (req, res)=>{
  var result = food.food.find(d=>d.id===req.params.id)
  res.json(result)
})
//one food items data

app.post('/food', (req, res)=>{
  res.send('one user added')
}) 
//add a food item  

app.put('/food/:id', (req, res)=>{
  res.send('one user modified')
}) 
//modify food items data

app.delete('/food/:id', (req, res)=>{
  res.send('user deleted by id')
}) 
//delete a food item
