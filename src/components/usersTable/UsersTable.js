import React from 'react';
import {getUsers, deleteUser} from '../../api/userApi';


class UsersTable extends React.Component {
  constructor(){
    super();

    this.state = {
      users: []
    };

    getUsers()
      .then(
        result => {
          this.setState({
            users: result
          });

          console.log(this.state.users);

        }
      );

    this.borrar = this.borrar.bind(this);
    this.traerUsuarios = this.traerUsuarios.bind(this);

  } // constructor

  traerUsuarios(){
    getUsers()
      .then(
        result => {
          this.setState({
            users: result
          });

          console.log(this.state.users);

        }
      );
  }

  borrar(event){
    event.preventDefault();
    console.log(event.target.id);
    if (confirm('seguro de borrar?')){
      deleteUser(event.target.id)
        .then(()=> {
          this.traerUsuarios();
        });

    }

  }



  render(){
    return(
      <div>
        <table>
          <thead>
            <th>&nbsp;</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </thead>
          <tbody>

          {this.state.users.map(user=> <UserListRow key={user.id} user={user} onDelete={this.borrar} />)}

          </tbody>
        </table>
      </div>

    );
  }
}

export default UsersTable;


const UserListRow = ({user, onDelete}) => {
  return (
    <tr>
      <td>
        <button id={user.id} onClick={onDelete} >Borrar</button>
      </td>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: React.PropTypes.object.isRequired
};


