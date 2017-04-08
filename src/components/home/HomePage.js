import React from 'react';
import './homePage.css';
// import TypeForm from 'react-typeform';


class HomePage extends React.Component {
  constructor(){
    super();
    this.laFuncion = this.laFuncion.bind(this);
  }

  componentDidMount(){
    console.log('did');
  }

  laFuncion(){
    console.log('perro');
  }

  render(){
    return(
      <div>
        <h1 className="jumbotron">Desde React!!</h1>
        <button onClick={this.laFuncion} className="btn btn-success">perro</button>
      </div>

    );
  }
}

export default HomePage;
