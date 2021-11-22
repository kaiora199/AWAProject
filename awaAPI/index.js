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
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'awa'
})

connection.connect()



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
  for (let i = 0; i < restaurants.restaurants.length; i++) {
    if (restaurants.restaurants[i].id === req.params.id) {
      restaurants.restaurants[i].name = req.body.name,
      restaurants.restaurants[i].address = req.body.address,
      restaurants.restaurants[i].operatingHours = req.body.operatingHours,
      restaurants.restaurants[i].image = req.body.image,
      restaurants.restaurants[i].restaurantType = req.body.restaurantType,
      restaurants.restaurants[i].priceLevel = req.body.priceLevel
      console.log(restaurants.restaurants[i].id)
    }
    
  }
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
  res.json(orders)
}) 
//all order data 

app.get('/orders/:id', (req, res)=>{
  var result = orders.orders.find(d=>d.id===req.params.id)
  res.json(result)
}) 
//one order data 

app.post('/orders', (req, res)=>{
  console.log("creating a new " + req.body.order);
  console.log(req.body);
  orders.orders.push({
      id: uuidv4(),
      orderPrice: req.body.orderPrice,
      orderTime: req.body.orderTime,
      orderStatus: req.body.orderStatus,
      orderQuantity: req.body.orderQuantity,
      orderDate: req.body.orderDate,
      orderNumber: req.body.orderNumber,
      customerName: req.body.customerName,
      customerDetails: req.body.customerDetails,
      customerEmail: req.body.customerEmail,
      customerAddress: req.body.customerAddress
  })
  res.send(req.body)
})
//add order data 

app.delete('/orders/:id', (req, res)=>{
  const result = orders.orders.findIndex(d => d.id ===req.params.id)
  if(result !== -1){
  orders.orders.splice(result,1)
  res.send('deleted '+ req.params.id)
  }else{
  res.send('no such order')
  }
}) 
//delete order data

app.get('/users', (req, res)=>{
  res.json(users.users)
})
//all user data

app.get('/users/:id', (req, res)=>{
  var result = users.users.find(d=>d.id===req.params.id)
  res.json(result)
})
//one users data

app.post('/users', (req, res)=>{
  console.log(req.body);
  users.users.push({
      id: uuidv4(),
      name: req.body.name,
      address: req.body.address,
      password: req.body.password
  })
  res.send('user created')
}) 
//add user data 

app.put('/users/:id', (req, res)=>{
  for (let i = 0; i < users.users.length; i++) {
    if (users.users[i].id === req.params.id) {
      users.users[i].name= req.body.name,
      users.users[i].address= req.body.address,
      users.users[i].password= req.body.password
      console.log(users.users[i].id)
    }
    
  }
  res.send('user modified')
}) 
//modify user data

app.delete('/users/:id', (req, res)=>{
  const result = users.users.findIndex(d => d.id ===req.params.id)
  if(result !== -1){
  users.users.splice(result,1)
  res.send('deleted '+ req.params.id)
  }else{
  res.send('no such user')
  }
}) 
//delete user data

app.get('/food', (req, res)=>{
  res.json(food.food)
})

app.get('/food/:id', (req, res)=>{
  var result = food.food.find(d=>d.id===req.params.id)
  res.json(result)
})
//one food items data

app.post('/food', (req, res)=>{
  console.log(req.body);
  food.food.push({
      id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
  })
  res.send('food item created')
}) 
//add a food item  

app.put('/food/:id', (req, res)=>{
  for (let i = 0; i < food.food.length; i++) {
    if (food.food[i].id === req.params.id) {
      food.food[i].name= req.body.name,
      food.food[i].description= req.body.description,
      food.food[i].price= req.body.price,
      food.food[i].image = req.body.image
      console.log(food.food[i].id)
    }
    
  }
  res.send('food item modified')
}) 
//modify food items data

app.delete('/food/:id', (req, res)=>{
  const result = food.food.findIndex(d => d.id ===req.params.id)
  if(result !== -1){
  food.food.splice(result,1)
  res.send('deleted '+ req.params.id)
  }else{
  res.send('no such food item')
  }
}) 
//delete a food item
