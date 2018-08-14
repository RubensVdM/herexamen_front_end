import * as React from 'react';
import * as starwarsService from '../../services/starwars.service';

export default class PeopleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        skin_color: '',
        eye_collor: '',
        birth_year: '',
        gender: '',
      }
    };
  }

  componentWillMount() {
    starwarsService.get2(this.props.match.params.name).then(response => this.setState({person: response.results[0]}));
  }

  render() {
    console.log(this.state.person)
    return (
      <div className = 'wrapper'>
        <h2>Character detail</h2>

        <section className = 'sectiondetail'>

        <div className = 'form-image cfx'>
          <img src = {`../../images/people/${this.state.person.name}.png`} />
        </div>

          <form action = '' onSubmit={(e) => this.onSubmit(e)}>
            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.name} required/>
                <div className = 'label-text noCursor'>Name</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.height} required/>
                <div className = 'label-text noCursor'>Height</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.mass} required/>
                <div className = 'label-text noCursor'>Mass</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.hair_color} required/>
                <div className = 'label-text noCursor'>Hair color</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.skin_color} required/>
                <div className = 'label-text noCursor'>Skin color</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.eye_color} required/>
                <div className = 'label-text noCursor'>Eye color</div>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input className = 'noCursor' type = 'text' value = {this.state.person.birth_year} required/>
                <div className = 'label-text noCursor'>Birth year</div>
              </div>
            </label>

            <div className = 'check-effect'>
              <fieldset>
                <legend>Gender</legend>
                <label><input type = 'radio' name = 'gender' value = 'male' checked = {this.state.person.gender === 'male'} /><div className="radioText">Male</div></label>
                <label><input type = 'radio' name = 'gender' value = 'female' checked = {this.state.person.gender === 'female'} /><div className="radioText">Female</div></label>
                <label><input type = 'radio' name = 'gender' value = 'n/a' checked = {this.state.person.gender === 'n/a'} /><div className="radioText">N/A</div></label>
              </fieldset>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
