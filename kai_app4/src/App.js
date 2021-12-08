import './App.css';
import axios from 'axios';
import React from 'react';
import RestaurantViewer from './components/restaurantViewer.js'
import HeaderFront from './components/header.js';
import FoodViewer from './components/foodViewer.js'
import UserViewer from './components/userViewer.js'
import OrderViewer from './components/orderViewer.js'
import SearchComponent from './components/searchComponent.js';
import AddRestaurantComponent from './components/restaurantCreate.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants: [],
      orders: [],
      food: [],
      users: [],
      restSearchValue: "",
        newName:"",
        newAddress:"",
        newPrice:"",
        newOperating:"",
        newType:"",
        newImg: ""
    }
  }

  deleteRestaurant = (deletingIDRestaurant) => {
    console.log('delet' + deletingIDRestaurant);
    let deleteIndex = this.state.restaurants.findIndex(restaurants=>restaurants.id === deletingIDRestaurant);
    if(deleteIndex !== -1){
      axios.delete(`http://localhost:3000/restaurants/${deletingIDRestaurant}`)
      .then(response=>{
      console.log(response)
      let newRestaurants = [...this.state.restaurants];
      newRestaurants.splice(deleteIndex,1);
      this.setState({restaurants: newRestaurants})
      })
    }
  }

  deleteFood = (deletingIDFood) => {
    console.log('delet' + deletingIDFood);
    let deleteIndex = this.state.food.findIndex(food=>food.id === deletingIDFood);
    if(deleteIndex !== -1){
      axios.delete(`http://localhost:3000/food/${deletingIDFood}`)
      .then(response=>{
      console.log(response)
      let newFood = [...this.state.food];
      newFood.splice(deleteIndex,1);
      this.setState({food: newFood})
      })
    }
  }

  deleteOrder = (deletingIDOrder) => {
    console.log('delet' + deletingIDOrder);
    let deleteIndex = this.state.orders.findIndex(orders=>orders.id === deletingIDOrder);
    if(deleteIndex !== -1){
      axios.delete(`http://localhost:3000/orders/${deletingIDOrder}`)
      .then(response=>{
      console.log(response)
      let newOrders = [...this.state.orders];
      newOrders.splice(deleteIndex,1);
      this.setState({orders: newOrders})
      })
    }
  }

  deleteUser = (deletingIDUser) => {
    console.log('delet' + deletingIDUser);
    let deleteIndex = this.state.users.findIndex(users=>users.id === deletingIDUser);
    if(deleteIndex !== -1){
      axios.delete(`http://localhost:3000/users/${deletingIDUser}`)
      .then(response=>{
      console.log(response)
      let newUsers = [...this.state.users];
      newUsers.splice(deleteIndex,1);
      this.setState({users: newUsers})
      })
    }
  }

  componentDidMount(){
    console.log('mounted')
    axios.get('http://localhost:3000/restaurants')
    .then((response)=>{
      this.setState({restaurants: response.data});
      console.log(response.data);
    })
    .catch((err)=> console.log(err));
    axios.get('http://localhost:3000/orders')
    .then((response)=>{
      this.setState({orders: response.data});
      console.log(response.data);
    })
    .catch((err)=> console.log(err));
    axios.get('http://localhost:3000/food')
    .then((response)=>{
      this.setState({food: response.data});
      console.log(response.data);
    })
    .catch((err)=> console.log(err));
    axios.get('http://localhost:3000/users')
    .then((response)=>{
      this.setState({users: response.data});
      console.log(response.data);
    })
    .catch((err)=> console.log(err));
  }

  onRestaurantSearch = (event) => {
    console.log(event.target.value)
    this.setState({restSearchValue: event.target.value})
  }

  newRestaurantHandlerName = (event) => {
    this.setState({
      newName: event.target.value
    })
  }
  newRestaurantHandlerAddress = (event) => {
    this.setState({
      newAddress: event.target.value
    })
  }
  newRestaurantHandlerPrice = (event) => {
    this.setState({
      newPrice: event.target.value
    })
  }
  newRestaurantHandlerHours = (event) => {
    this.setState({
      newOperating: event.target.value
    })
  }
  newRestaurantHandlerType = (event) => {
    this.setState({
      newType: event.target.value
    })
  }

  addNewRestaurant = () =>{
    axios.post('http://localhost:3000/restaurants',
    {
      name: this.state.newName,
      address: this.state.newAddress,
      operatingHours: this.state.newOperating,
      restaurantType: this.state.newType,
      priceLevel: this.state.newPrice
    })
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render()
  {
    return (
      <div>
        <HeaderFront/>
        <SearchComponent onRestaurantSearch={this.onRestaurantSearch}/>
        <AddRestaurantComponent 
        addNewRestaurant={this.addNewRestaurant}
        newRestaurantHandlerName={this.newRestaurantHandlerName}
        newRestaurantHandlerAddress={this.newRestaurantHandlerAddress}
        newRestaurantHandlerPrice={this.newRestaurantHandlerPrice}
        newRestaurantHandlerHours={this.newRestaurantHandlerHours}
        newRestaurantHandlerType={this.newRestaurantHandlerType}
        />
        <RestaurantViewer 
                restauData={this.state.restaurants.filter((item)=>item.name.includes(this.state.restSearchValue))} 
                deleteRestaurant={this.deleteRestaurant}
        />
        <FoodViewer
                fooData={this.state.food} 
                deleteFood={this.deleteFood}
        />
        <UserViewer
                userData={this.state.users} 
                deleteUser={this.deleteUser}
        />
        <OrderViewer
                orderData={this.state.orders} 
                deleteOrder={this.deleteOrder}
        />
      </div>
      
    )
  }
}

export default App;
