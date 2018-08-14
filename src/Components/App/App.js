import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import PersonDetail from '../PeopleDetail/PeopleDetail';
import PeopleOverview from '../PeopleOverview/PeopleOverview';
import AddPeople from '../AddPeople/AddPeople';
import MyCharacters from '../MyCharacters/MyCharacters';
import MyCharacterDetail from '../MyCharacters/MyCharacterDetail';
import Loading from '../Loading/Loading';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/characters' component={PeopleOverview} />
        <Route exact path='/mycharacters' component={MyCharacters} />
        <Route exact path='/characters/add' component={AddPeople} />
        <Route exact path='/characters/detail/:name' component={PersonDetail} />
        <Route exact path='/mycharacters/detail/:name' component={MyCharacterDetail} />
          <Route exact path='/loadingpage' component={Loading} />
      </div>
    );
  }
}

export default App;
