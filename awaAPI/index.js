const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'awa'
})



connection.connect();
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
  var sql = "SELECT * FROM restaurants;"
  connection.query(sql, function (err, restaurants, fields){
    res.json(restaurants)
    console.log(restaurants)
  })


}) 
//all restaurant data 

app.get('/restaurants/:id', (req, res)=>{
  var sql = "SELECT * FROM restaurants WHERE id=?;"
  var values =[
    id= req.params.id
  ]
  console.log(values)
  connection.query(sql, values, function (err, result){
    if (err) throw err;
    res.json(result)
  })
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
  console.log(req.body)
  var sql = "INSERT INTO restaurants(name, address, operatingHours, restaurantType, priceLevel) VALUES(?)"
  var values = 
  [
    [
    name= req.body.name,
    address= req.body.address,
    operatingHours= req.body.operatingHours,
    restaurantType= req.body.restaurantType,
    priceLevel= req.body.priceLevel
    ]
]
  console.log(values)
    connection.query(sql, [...values],function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  res.send('restaurant created')
})
//admin restaurant data 

app.delete('/restaurants/:id', (req, res)=>{
  var sql = "DELETE FROM restaurants WHERE id=?"
  var values = [[
    id= req.params.id
  ]]
  console.log(values)
  connection.query(sql, [...values],function (err, result) {
    console.log("1 record delet");
  });
}) 
//admin delete restaurant data

app.get('/orders', (req, res)=>{
  var sql = "SELECT * FROM orders;"
  connection.query(sql, function (err, orders, fields){
    if (err) throw err;
    res.json(orders)
  })

}) 
//all order data 

app.get('/orders/:id', (req, res)=>{
  var sql = "SELECT * FROM orders WHERE id=?;"
  var values =[
    id= req.params.id
  ]
  console.log(values)
  connection.query(sql, values, function (err, result){
    if (err) throw err;
    res.json(result)
  })
}) 
//one order data 

app.post('/orders', (req, res)=>{
  console.log("creating a new " + req.body.order);
  console.log(req.body);
  var sql = "INSERT INTO orders(order_number, order_price, order_quanordersrestaurantstity, order_date, order_status, customer_name, customer_details, customer_email, customer_adress) VALUES(?)"
  var values = 
  [
    [
      orderNumber=req.body.orderNumber,
      orderPrice=req.body.orderPrice,     
      orderQuantity=req.body.orderQuantity,      
      orderDate=req.body.orderDate,
      orderStatus=req.body.orderStatus,
      customerName=req.body.customerName,
      customerDetails= req.body.customerDetails,
      customerEmail=req.body.customerEmail,
      customerAddress=req.body.customerAddress
    ]
]
  console.log(values)
    connection.query(sql, [...values],function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  res.send('restaurant created')
})
//add order data 

app.delete('/orders/:id', (req, res)=>{
  var sql = "DELETE FROM orders WHERE id=?"
  var values = [[
    id= req.params.id
  ]]
  console.log(values)
  connection.query(sql, [...values],function (err, result) {
    console.log("1 record delet");
  });
}) 
//delete order data

app.get('/users', (req, res)=>{
  var sql = "SELECT * FROM users;"
  connection.query(sql, function (err, users){
    if (err) throw err;
    res.json(users)
  })
})
//all user data

app.get('/users/:id', (req, res)=>{
  var sql = "SELECT * FROM users WHERE id=?;"
  var values =[
    id= req.params.id
  ]
  console.log(values)
  connection.query(sql, values, function (err, result){
    if (err) throw err;
    res.json(result)
  })
})
//one users data

app.post('/users/:id', (req, res)=>{
  var sql = "INSERT INTO users(user_email, user_password, user_fullname, username, orders_id) VALUES(?)"
  var values = 
  [
    [
    userEmail= req.body.userEmail,
    userPassword= req.body.userPassword,
    userFullname= req.body.userFullname,
    userName= req.body.userName,
    ordersID= req.body.ordersID
    ]
]
  console.log(values)
    connection.query(sql, [...values],function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  res.send('restaurant created')
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
  var sql = "DELETE FROM users WHERE id=?"
  var values = [[
    id= req.params.id
  ]]
  console.log(values)
  connection.query(sql, [...values],function (err, result) {
    console.log("1 record delet");
  });
}) 
//delete user data

app.get('/food', (req, res)=>{
  var sql = "SELECT * FROM food;"
  connection.query(sql, function (err, food, fields){
    if (err) throw err;
    res.json(food)
  })
})

app.get('/food/:id', (req, res)=>{
  var sql = "SELECT * FROM food WHERE id=?;"
  var values =[
    id= req.params.id
  ]
  console.log(values)
  connection.query(sql, values, function (err, result){
    if (err) throw err;
    res.json(result)
  })
})
//one food items data

app.post('/food', (req, res)=>{
  var sql = "INSERT INTO food(title, price, description, restaurants_id) VALUES(?)"
  var values = 
  [
    [
      title= req.body.title,
      price= req.body.price,
      description= req.body.description,
      restaurantsID= req.body.restaurantsID
    ]
]
  console.log(values)
    connection.query(sql, [...values],function (err, result) {
      console.log("1 record inserted");
    });
  res.send('restaurant created')
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
  var sql = "DELETE FROM food WHERE id=?"
  var values = [[
    id= req.params.id
  ]]
  console.log(values)
  connection.query(sql, [...values],function (err, result) {
    console.log("1 record delet");
  });
}) 
//delete a food item
