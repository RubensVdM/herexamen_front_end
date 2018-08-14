import * as React from 'react';
import * as starwarsService from '../../services/starwars.service';

export default class MyCharacterDetail extends React.Component {
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
    starwarsService.get(this.props.match.params.name).then(response => this.setState({person: response.message}));
  }

  updateName(name) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        name,
      }
    });
  }

  updateHeight(height) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        height,
      }
    });
  }

  updateMass(mass) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        mass,
      }
    });
  }

  updateHairColor(hair_color) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        hair_color,
      }
    });
  }

  updateSkinColor(skin_color) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        skin_color,
      }
    });
  }

  updateEyeColor(eye_color) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        eye_color,
      }
    });
  }

  updateBirthYear(birth_year) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        birth_year,
      }
    });
  }

  updateGender(gender) {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        gender,
      }
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      nameError: '',
      heightError: '',
      massError: '',
      hair_colorError: '',
      skin_colorError: '',
      eye_collorError: '',
      birth_yearError: '',
    };

    if (this.state.person.name.length < 4) {
      isError = true;
      errors.nameError = 'The characters name needs to be atleast 4 characters long';
    }

    if (isNaN(this.state.person.height)) {
      isError = true;
      errors.heightError = 'Heigth needs to be a number';
    }

    if (isNaN(this.state.person.mass)) {
      isError = true;
      errors.massError = 'Mass needs to be a number';
    }

    if (this.state.person.hair_color.length < 3) {
      isError = true;
      errors.hair_colorError = 'The characters hair color needs to be atleast 3 characters long';
    }

    if (this.state.person.skin_color.length < 3) {
      isError = true;
      errors.skin_colorError = 'The characters skin color needs to be atleast 3 characters long';
    }

    if (this.state.person.eye_color.length < 3) {
      isError = true;
      errors.eye_collorError = 'The characters eye color needs to be atleast 3 characters long';
    }

    if (this.state.person.birth_year.length < 4) {
      isError = true;
      errors.birth_yearError = 'Birth year needs to be at least 4 characters long';
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors,
      });
    }

    return isError;
  }

  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();

    if (!err) {
      starwarsService.update(this.props.match.params.name, this.state.person).then(() => this.props.history.push('/mycharacters'));
      this.setState({
        ...this.state,
        person: {
          name: '',
          height: '',
          mass: '',
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',
        },

        nameError: '',
        heightError: '',
        massError: '',
        hair_colorError: '',
        skin_colorError: '',
        eye_colorError: '',
        birth_yearError: '',
      });
    }
    else {
      this.shakeFunction();
    }
  }

  shakeFunction() {
    var elem = document.getElementById("shake");
    elem.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem2 = document.getElementById("shake2");
    elem2.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem3 = document.getElementById("shake3");
    elem3.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem4 = document.getElementById("shake4");
    elem4.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem5 = document.getElementById("shake5");
    elem5.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem6 = document.getElementById("shake6");
    elem6.style.WebkitAnimation = "shake 1s 1 ease-out";

    var elem7 = document.getElementById("shake7");
    elem7.style.WebkitAnimation = "shake 1s 1 ease-out";
  }

  render() {
    return (
      <div className = 'wrapper'>
        <h2>My character detail</h2>

        <section className = 'sectiondetail'>

        <div className = 'form-image cfx'>
          <img src = {`../../images/people/Anonymous.png`} />
        </div>

          <form action = '' onSubmit={(e) => this.onSubmit(e)}>
            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.name} onChange = {(e) => this.updateName(e.target.value)} required/>
                <div className = 'label-text'>Name</div>
                <p id="shake">{this.state.nameError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.height} onChange = {(e) => this.updateHeight(e.target.value)} required/>
                <div className = 'label-text'>Height</div>
                <p id="shake2">{this.state.heightError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.mass} onChange = {(e) => this.updateMass(e.target.value)} required/>
                <div className = 'label-text'>Mass</div>
                <p id="shake3">{this.state.massError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.hair_color} onChange = {(e) => this.updateHairColor(e.target.value)} required/>
                <div className = 'label-text'>Hair color</div>
                <p id="shake4">{this.state.hair_colorError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.skin_color} onChange = {(e) => this.updateSkinColor(e.target.value)} required/>
                <div className = 'label-text'>Skin color</div>
                <p id="shake5">{this.state.skin_colorError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.eye_color} onChange = {(e) => this.updateEyeColor(e.target.value)} required/>
                <div className = 'label-text'>Eye color</div>
                <p id="shake6">{this.state.eye_collorError}</p>
              </div>
            </label>

            <label>
              <div className = 'text-effect'>
                <input type = 'text' value = {this.state.person.birth_year} onChange = {(e) => this.updateBirthYear(e.target.value)} required/>
                <div className = 'label-text'>Birth year</div>
                <p id="shake7">{this.state.birth_yearError}</p>
              </div>
            </label>

            <div className = 'check-effect'>
              <fieldset>
                <legend>Gender</legend>
                <label><input type = 'radio' name = 'gender' value = 'male' checked = {this.state.person.gender === 'male'} onChange = {(e) => this.updateGender(e.target.value)} /><div className="radioText">Male</div></label>
                <label><input type = 'radio' name = 'gender' value = 'female' checked = {this.state.person.gender === 'female'} onChange = {(e) => this.updateGender(e.target.value)} /><div className="radioText">Female</div></label>
                <label><input type = 'radio' name = 'gender' value = 'n/a' checked = {this.state.person.gender === 'n/a'} onChange = {(e) => this.updateGender(e.target.value)} /><div className="radioText">N/A</div></label>
              </fieldset>
            </div>

            <button type="submit">Update changes</button>
          </form>
        </section>
      </div>
    )
  }
}
