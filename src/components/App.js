import React from 'react';
import {Link} from 'react-router';


class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <Link to="/" >Home</Link>
        <span> | </span>
        <Link to="the-users" >Usuarios</Link>


        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};


export default App;
