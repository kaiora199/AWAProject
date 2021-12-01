import './App.css';
import axios from 'axios';
import React from 'react';
import RestaurantViewer from './components/restaurantViewer.js'
import HeaderFront from './components/header.js';
import FoodViewer from './components/foodViewer.js'
import UserViewer from './components/userViewer.js'
import OrderViewer from './components/orderViewer.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants: [],
      orders: [],
      food: [],
      users: []
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
      axios.delete(`http://localhost:3000/restaurants/${deletingIDFood}`)
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
      axios.delete(`http://localhost:3000/user/${deletingIDUser}`)
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

  render()
  {
    console.log(this.state.users)
    return (
      <div>
        <HeaderFront/>
        <RestaurantViewer 
                restauData={this.state.restaurants} 
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
