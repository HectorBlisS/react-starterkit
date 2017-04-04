import React from 'react';
import css from './homePage.css';


class HomePage extends React.Component {
  render(){
    return(
      <div>
        <h1 className="jumbotron">Desde React!!</h1>
        <button className="btn btn-success">perro</button>
      </div>

    );
  }
}

export default HomePage;
