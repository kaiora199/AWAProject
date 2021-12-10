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
import AdminHeaderFront from './components/adminHeader.js'
import AddFoodComponent from './components/foodCreate.js'
import styles from './components/Header.module.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      managerMode: false,
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
        newImg: "",
        newTitle: "",
        newFoodPrice: "",
        newDesc: "",
        newResID: ""
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
  //handlers for adding restaurants
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
  //handlers for adding food items
  newFoodHandlerTitle = (event) => {
    this.setState({
      newTitle: event.target.value
    })
  }
  newFoodHandlerPrice = (event) => {
    this.setState({
      newFoodPrice: event.target.value
    })
  }
  newFoodHandlerDesc = (event) => {
    this.setState({
      newDesc: event.target.value
    })
  }
  newFoodHandlerResID = (event) => {
    this.setState({
      newResID: event.target.value
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

  addNewFood = () =>{
    axios.post('http://localhost:3000/food',
    {
      title: this.state.newTitle,
      price: this.state.newFoodPrice,
      description: this.state.newDesc,
      restaurantsID: this.state.newResID,
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

    let output =       
    <div>
    <HeaderFront managerChanger={()=>this.setState({managerMode: true})}/>
    <SearchComponent onRestaurantSearch={this.onRestaurantSearch}/>
    <RestaurantViewer 
        restauData={this.state.restaurants.filter((item)=>item.name.includes(this.state.restSearchValue))} 
        />
    <FoodViewer
        fooData={this.state.food}/>
  </div>;

    if (this.state.managerMode) {
      output =
      <>         
      <AdminHeaderFront managerChanger={()=>this.setState({managerMode: false})}/>
      <div className={styles.justAContainer}>
      <AddRestaurantComponent
          restauData={this.state.restaurants}
          deleteRestaurant={this.deleteRestaurant} 
          addNewRestaurant={this.addNewRestaurant}
          newRestaurantHandlerName={this.newRestaurantHandlerName}
          newRestaurantHandlerAddress={this.newRestaurantHandlerAddress}
          newRestaurantHandlerPrice={this.newRestaurantHandlerPrice}
          newRestaurantHandlerHours={this.newRestaurantHandlerHours}
          newRestaurantHandlerType={this.newRestaurantHandlerType}/>
      <AddFoodComponent
          fooData={this.state.food}
          deleteFood={this.deleteFood}          
          addNewFood={this.addNewFood}
          newFoodHandlerTitle={this.newFoodHandlerTitle}
          newFoodHandlerDesc={this.newFoodHandlerDesc}
          newFoodHandlerPrice={this.newFoodHandlerPrice}
          newFoodHandlerResID={this.newFoodHandlerResID}/>
      </div>
      <h1>Orders</h1>
      <OrderViewer
          orderData={this.state.orders} 
          deleteOrder={this.deleteOrder}/>
      <h1>Users</h1>
      <UserViewer
          userData={this.state.users} 
          deleteUser={this.deleteUser}/>
      </>;
    }

    return (
      <>
      {output}
      </>
    )
  }
}

export default App;
