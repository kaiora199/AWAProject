import './App.css';
import axios from 'axios';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DogPound from './components/dogPound.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      restaurants: []
    }
  }

  deleteRestaurant = (deletingID) => {
    console.log('delet' + deletingID);
    let deleteIndex = this.state.restaurants.findIndex(restaurants=>restaurants.id === deletingID);
    if(deleteIndex !== -1){
      axios.delete(`http://localhost:3000/restaurants/${deletingID}`)
      .then(response=>{
      console.log(response)
      let newRestaurants = [...this.state.restaurants];
      newRestaurants.splice(deleteIndex,1);
      this.setState({restaurants: newRestaurants})
      })
    }
  }

  componentDidMount(){
    console.log('mounted')
    axios.get('http://localhost:3000/restaurants')
    .then((response)=>{
      console.log(response);
      this.setState({restaurants: response.data.restaurants});
      console.log(response.data.restaurants);
    })
    .catch((err)=> console.log(err))
  }

  render()
  {
    return (
      <BrowserRouter>
        <div>

          
          <DogPound restauData={this.state.restaurants} deleteRestaurant={this.deleteRestaurant}/>
          <Routes>

            <Route path="/login" element={ <Login /> }></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
