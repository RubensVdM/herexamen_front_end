import * as React from 'react';
import Person from './MyCharacter';
import * as starwarsService from '../../services/starwars.service';

export default class MyCharacters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      isLoading: true,
    };
  }

  renderPeople() {
    return this.state.people.map((person, i) => (<span key = {i}><Person name={person.name} image = {person.name} gender = {person.gender} height = {person.height} mass = {person.mass}/></span>));
  }

  componentWillMount() {
    starwarsService.getAll().then(response => this.setState({people: response.message, isLoading: false}));
  }

  render() {
    let content= '';
    let content2 = '';

    if(!this.state.isLoading){
      if(this.state.people.length){
        content = this.renderPeople();
      }else{
        content = (<p>No characters found</p>);
      }
    }else{
      content=(
        <div>
          <div className="loading_BB8">
            <img src = 'images/BB8_body.png' className = 'BB8_body'/>
            <img src = 'images/BB8_head.png' className = 'BB8_head'/>
          </div>
          <h2>Characters are loading...</h2>
        </div>
      )
    }
    return (
      <section>
        <div className="wrapper">
          <h2>My characters</h2>

          <section id = 'grid' className= 'grid cfx'>
              {content}
              {content2}
          </section>
        </div>
      </section>
    );
  }
}
