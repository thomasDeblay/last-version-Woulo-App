import React from 'react';


export default class WouloForm extends React.Component {
  constructor(props) {
    super(props);


  
    this.state = {
      woulo: props.waitinglist ? props.waitinglist.woulo : '',
      error: ''
    };
}
  onWouloChange = (e) => {
    const woulo = e.target.value;
    this.setState(() => ({ woulo }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.woulo) {
      this.setState(() => ({ error: 'Le woulo est vide, vous devez entrer le votre' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        woulo: this.state.woulo,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
      {this.state.error && <p className="form__error">{this.state.error}</p>}
      <textarea
        placeholder="Ajoute ton WOULO !"
        className="textarea"
        value={this.state.woulo}
        onChange={this.onWouloChange}
      >
      </textarea>
      <div>
        <button className="button">Enregistrer</button>
      </div>
    </form>
    )
  }
}
